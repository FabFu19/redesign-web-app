import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Applications } from './applications';

@Entity()
export class Offers {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: 'text', nullable: true })
  description!: string;

  @Column({ nullable: true })
  area!: string;

  @Column({ nullable: true })
  location!: string;

  @Column({ nullable: true })
  salary_range!: string;

  @Column({ nullable: true })
  experience_required!: string;

  @Column({ type: 'datetime', nullable: true })
  interview_date!: Date;

  @Column({ nullable: true })
  profile_image_url!: string;

  @Column({ default: true })
  is_active!: boolean;

  @OneToMany(() => Applications, (app) => app.offer)
  applications!: Applications[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
