const getPageInfo = require('../db/PageInfo').getPageInfo;

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));



app.get('/room/:roomid', (req, res) => {
  /*console.log(req.params.roomid)*/
  getPageInfo(req.params.roomid, (err, data) => {
  	if (err) {
      res.status(500).send(err);
  	} else {
      console.log('server fetch', data)
      res.json(data)
    }
  })
})
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
