/** Google Cloud API credentials that allows the application to
  * make calls to a Google API.
  * See {@link https://console.developers.google.com}
  * and replace each value with your own.
  * @todo replace each googleAuth value with your app's client credentials
  * @todo give yourself a unique secrect for your sessions
  * @module config/auth
  */
  const authConfigs = {
    googleAuth: {
      clientId: '135959306026-cltfi3s6iv4mt5v38iihd0vg5klj3iga.apps.googleusercontent.com',
      clientSecret: 'jV7ZcOG_2B6AI395KLnDbYtk',
      callbackUrl: 'http://localhost:3000/auth/google/callback',
    },

    sessionVars: {
      secret: 'careshare',
    },
  };

module.exports = authConfigs;
