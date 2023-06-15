

export const firebaseConfig = {
  apiKey: "AIzaSyBi1nD07QycUc_Nssa2BrgEkxJiIg9ciC0",
  authDomain: "la-acusti-k.firebaseapp.com",
  projectId: "la-acusti-k",
  storageBucket: "la-acusti-k.appspot.com",
  messagingSenderId: "1029300366449",
  appId: "1:1029300366449:web:5869c0825e2da7de78bfd0"
};



export const actionCodeSettingsVerification = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://nucba-zappi-1917.web.app',
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/login'
      : 'https://nucba-zappi-1917.web.app',
};