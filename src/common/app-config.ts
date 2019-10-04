import 'reflect-metadata';
import {ConnectionOptions,} from 'typeorm';

export let dbOptions: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'db',
  entities: [
    './entities/*.js',
  ],
  synchronize: true,
};
