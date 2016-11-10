
var multer = require('multer');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/original');
	},

	filename: function (req, file, cb) {
		var originalname = file.originalname,
			fileExt = originalname.slice(originalname.lastIndexOf('.')),
			fileName = originalname.slice(0, originalname.lastIndexOf('.'));

		cb(null, fileName + '-' + Date.now() + fileExt);
	}

});

upload = multer({storage: storage});

module.exports = upload;