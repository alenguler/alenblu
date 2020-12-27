module.exports = (app) => {
    const status = require('../controllers/status.controller.js');

    // Retrieve all Status
    app.get('/status', status.getStatus);
}