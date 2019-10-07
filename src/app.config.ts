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
    __dirname + '\\entities\\*-entity.js',
  ],
  synchronize: true,
};
