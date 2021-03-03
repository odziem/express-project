const path = require('path');
// /folder/files.jpg \folder\files.jpg

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'));
  // res.send('<ul><li>Helloo Albert!</li></ul>');
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage,
};