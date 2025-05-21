const { google } = require('googleapis');
require('dotenv').config();

exports.handler = async (event) => {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],                                                                                                                                                                                                                                                                                                                                                                         
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const payload = JSON.parse(event.body);
    const sheetname = payload.sheetname || 'Sheet1';
    const spreadsheetId = process.env.SHEET_ID;

    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const exists = spreadsheet.data.sheets.some(sheet => sheet.properties.title === sheetname);

    if (!exists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: sheetname } } }]
        }
      });
    }

    const values = [Object.values(payload)];
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetname}!A1`,
      valueInputOption: 'RAW',
      resource: { values },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
