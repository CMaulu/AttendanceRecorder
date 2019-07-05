let path = require('path')


exports.homepage = function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public','html' ,'home.html'));
}

