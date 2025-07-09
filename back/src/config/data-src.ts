import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Users } from '../entities/users';
import { Roles } from '../entities/role';
import { Offers } from '../entities/offers';
import { Applications } from '../entities/applications';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'db.sqlite3',
  synchronize: true,
  logging: false,
  entities: [Users, Roles, Offers, Applications],
  migrations: [],
  subscribers: [],
});
