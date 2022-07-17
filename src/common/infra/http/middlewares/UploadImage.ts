import multer from 'multer';
import mime from 'mime';
import Randomstring from 'randomstring';

import StorageConfig from '../../../../config/StorageConfig';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, StorageConfig.local.tempFolder);
  },
  filename(req, file, cb) {
    const ext = mime.getExtension(file.mimetype);
    cb(null, `${Randomstring.generate(10)}.${ext}`);
  },
});

const uploader = multer({
  storage,
  limits: { fileSize: 50000000, files: 1 },
});

export default uploader;
