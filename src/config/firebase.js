const admin = require('firebase-admin');
const serviceKey = require('./firebase-service-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceKey),
});
