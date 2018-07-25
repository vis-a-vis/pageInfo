const connection = require('./index');

const getPageInfo = function(cb) {
	connection.query('SELECT * FROM myTable', (err, data) => {
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