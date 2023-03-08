import express from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

export default function Routes(app) {
  const router = express.Router();
  app.use('/', router);
  // check status and stats of db
  router.get('/status', AppController.getStatus);
  router.get('/stats', AppController.getStats);

  // connect and disconnect user
  router.get('/connect', AuthController.getConnect);
  router.get('/disconnect', AuthController.getDisconnect);

  // upload files and check it
  router.post('/files', FilesController.postUpload);
  router.get('/files/:id', FilesController.getShow);
  router.get('/files', FilesController.getIndex);

  // publish and unpublish
  router.put('/files/:id/publish', FilesController.putPublish);
  router.put('/files/:id/unpublish', FilesController.putUnpublish);

  // send and get info user
  router.post('/users', UsersController.postNew);
  router.get('/users/me', UsersController.getMe);

  // file content
  router.get('/files/:id/data', FilesController.getFile);
}
