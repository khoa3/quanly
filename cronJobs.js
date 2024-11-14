const cron = require('node-cron');
const notificationController = require('./controllers/notificationController');

cron.schedule('0 9 * * *', () => {
    console.log('Running daily task reminder cron job');
    notificationController.sendReminderEmails();
});

module.exports = cron;
