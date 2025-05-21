
import React, { useState } from 'react';
import axios from 'axios';
import './BannerWithForm.css';

const BannerWithForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact_no: '',
    service: '',
    msg: '',
    sheetname:"web99",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email.';
    }

    if (!formData.contact_no.trim()) {
      newErrors.contact_no = 'Phone number is required.';
    } else if (!/^[0-9]{10}$/.test(formData.contact_no.trim())) {
      newErrors.contact_no = 'Phone number must be 10 digits.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      ...formData,
      tag: 'Contact',
      pageurl: window.location.href,
      required: 'name,contact_no,service',
    };
  //   try {
  //     const response = await axios.post('http://localhost:5000', payload);

  //     if (response.status === 200) {
  //       setStatus('success');
  //       setFormData({
  //         name: '',
  //         email: '',
  //         contact_no: '',
  //         service: '',
  //         msg: '',
          
  //       });
  //       setErrors({});
  //     } else {
  //       setStatus('error');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setStatus('error');
  //   }
  // };
  try {
    // const response = await axios.post('http://localhost:5173/.netlify/functions/saveToSheet', payload)

      const response = await axios.post('/.netlify/functions/saveToSheet', payload); // Or your backend route
      if (response.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          contact_no: '',
          service: '',
          msg: '',
          sheetname: 'web99',
        });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="banner">
      <div className="banner__background">
        <div className="banner__container">
          <h1 className="banner__title">
            Ideas to digital brilliance
          </h1>
          <p className="banner__subtitle">
            Transforming your ideas into digital brilliance with innovative design and cutting-edge technology
          </p>

          <div className="form">
            <div className="form__intro">
              <h2 className="form__title">Get in touch!</h2>
              <p className="form__description">
                Whether you have a question, need more information, or are eager to start your project, our team is here to help
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form__body">
              <div className="form__grid">
                <div className="form__group">
                  <label htmlFor="name">Name: <span>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                  />
                  {errors.name && <small className="form__error">{errors.name}</small>}
                </div>

                <div className="form__group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                  {errors.email && <small className="form__error">{errors.email}</small>}
                </div>

                <div className="form__group">
                  <label htmlFor="contact_no">Phone Number: <span>*</span></label>
                  <input
                    type="tel"
                    id="contact_no"
                    name="contact_no"
                    value={formData.contact_no}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                  />
                  {errors.contact_no && <small className="form__error">{errors.contact_no}</small>}
                </div>

                <div className="form__group">
                  <label htmlFor="service">Select Service: <span>*</span></label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">-- SELECT SERVICE --</option>
                    <option value="Website Designing">Website Designing</option>
                    <option value="SEO">SEO</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="App Development">App Development</option>
                    <option value="Ecommerce Development">Ecommerce Development</option>
                  </select>
                  {errors.service && <small className="form__error">{errors.service}</small>}
                </div>
              </div>

              <div className="form__group form__message">
                <label htmlFor="msg">Message:</label>
                <textarea
                  id="msg"
                  name="msg"
                  rows="5"
                  value={formData.msg}
                  onChange={handleChange}
                  placeholder="Message..."
                />
              </div>

              <div className="form__submit">
                <button type="submit" className="form__button">
                  <img
                    loading="lazy"
                    src="AutoCarousel/sewer.webp"
                    alt="Consultation Icon"
                    className="form__icon"
                  />
                  <span>Submit</span>
                </button>
              </div>

              {status === 'success' && (
                <p className="form__success">Thank you! We’ll be in touch shortly.</p>
              )}
              {status === 'error' && (
                <p className="form__error">There was a problem submitting the form. Please try again.</p>
              )}

              <p className="form__footer">
                Join 100+ brands who launched their websites with us last year!
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerWithForm;
