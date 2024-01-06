import React, { useState } from 'react';

function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [validation, setValidation] = useState({
    fullName: true,
    subject: true,
    email: true,
    body: true,
  });

  const validateField = (field, value) => {
    switch (field) {
      case 'fullName':
      case 'subject':
      case 'body':
        return value.trim().length >= 3;
      case 'email':
        return /\S+@\S+\.\S+/.test(value);
      default:
        return true;
    }
  };

  const handleBlur = (field, value) => {
    setValidation({ ...validation, [field]: validateField(field, value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.values(validation).every(Boolean);
    if (isValid) {
      console.log({ fullName, subject, email, body });
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 '>
          <form onSubmit={handleSubmit}>
            <div className='form-group form-data'>
              <input
                type='text'
                className={`form-control ${!validation.fullName && 'is-invalid'}`}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onBlur={() => handleBlur('fullName', fullName)}
                placeholder='Name'
                required
              />
              {!validation.fullName && (
                <div className='invalid-feedback'>Please enter a valid name (minimum 3 characters).</div>
              )}
            </div>
            <div className='form-group form-data'>
              <input
                type='text'
                className={`form-control ${!validation.subject && 'is-invalid'}`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onBlur={() => handleBlur('subject', subject)}
                placeholder='Subject'
                required
              />
              {!validation.subject && (
                <div className='invalid-feedback'>Please enter a valid subject (minimum 3 characters).</div>
              )}
            </div>
            <div className='form-group form-data'>
              <input
                type='email'
                className={`form-control ${!validation.email && 'is-invalid'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur('email', email)}
                placeholder='Email'
                required
              />
              {!validation.email && (
                <div className='invalid-feedback'>Please enter a valid email address.</div>
              )}
            </div>
            <div className='form-group form-data'>
              <textarea
                className={`form-control ${!validation.body && 'is-invalid'}`}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                onBlur={() => handleBlur('body', body)}
                placeholder='Body'
                required
              ></textarea>
              {!validation.body && (
                <div className='invalid-feedback'>Please enter a valid body (minimum 3 characters).</div>
              )}
            </div>
            <button type='submit' className='btn btn-primary form-control'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;