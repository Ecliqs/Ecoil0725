import React, { useEffect, useState } from 'react';

const ReCaptchaComponent = () => {
  const [token, setToken] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const loadRecaptchaScript = () => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute('YOUR_SITE_KEY', { action: 'homepage' }).then((token) => {
            setToken(token);
            setIsVerified(true);
          });
        });
      };
    };

    loadRecaptchaScript();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isVerified) {
      console.log('Form submitted with token:', token);
      // Handle form submission logic
    } else {
      console.error('reCAPTCHA verification failed');
    }
  };

  return (
    <div>
      <h1>React Google reCAPTCHA v3</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form fields */}
        <button type="submit" disabled={!isVerified}>Submit</button>
      </form>
    </div>
  );
};

export default ReCaptchaComponent;
