require("dotenv").config();

const connectionString = process.env.MONGO_URL;
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

const variables = { connectionString, serviceAccount };

module.exports = variables;
