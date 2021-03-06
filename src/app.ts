import * as express from 'express';
import * as bodyParser from 'body-parser';
import 'reflect-metadata';
import { createConnection, } from 'typeorm';

import * as appConfig from './common/app-config';

/**
 * Controllers (route handlers).
 */
import * as userController from './controllers/user-controller';

/**
 * Create Express server.
 */
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 9999);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

/**
 * Primary app routes.
 */
app.get('/users', userController.getAllUsers);
app.post('/add-user', userController.setUser);

createConnection(appConfig.dbOptions).then(async () => {
  console.log('Connected to DB');

}).catch(error => console.log('TypeORM connection error: ', error));

module.exports = app;
