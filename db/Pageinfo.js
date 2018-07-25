const connection = require('./index');

const getPageInfo = function(roomid, cb) {
	connection.query('SELECT * FROM myTable WHERE id = ?', roomid, (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

module.exports = {
  getPageInfo
};