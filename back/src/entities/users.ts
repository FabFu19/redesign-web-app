import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Roles } from './role';
import { Applications } from './applications';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  lastname!: string;

  @ManyToOne(() => Roles, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role!: Roles;

  @OneToMany(() => Applications, (app) => app.user)
  applications!: Applications[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
