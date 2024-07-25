import React, { useEffect } from 'react';

const RecaptchaV3 = ({ onVerify }) => {
  useEffect(() => {
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute('6Lf7ehUqAAAAACe9EEJTTRZJkLQ2kvYLrgDWQ4xd', { action: 'submit' }).then(token => {
          onVerify(token);
        });
      });
    }
  }, [onVerify]);

  return null;
};

export default RecaptchaV3;
