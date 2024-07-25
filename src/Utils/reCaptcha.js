// export const loadRecaptchaScript = (siteKey, callback) => {
//     const script = document.createElement('script');
//     script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
  
//     script.onload = () => {
//       window.grecaptcha.ready(() => {
//         window.grecaptcha.execute(siteKey, { action: 'homepage' }).then((token) => {
//           callback(token);
//         });
//       });
//     };
//   };
  