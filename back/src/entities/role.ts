import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Users } from './users';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  role!: string;

  @Column({ nullable: true })
  description!: string;

  @OneToMany(() => Users, (user) => user.role)
  users!: Users[];
}
