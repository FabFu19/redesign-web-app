import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Users } from './users';
import { Offers } from './offers';

@Entity()
export class Applications {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Users, (user) => user.applications)
  @JoinColumn({ name: 'user_id' })
  user!: Users;

  @ManyToOne(() => Offers, (offer) => offer.applications)
  @JoinColumn({ name: 'offer_id' })
  offer!: Offers;

  @Column()
  status!: string;

  @Column()
  cv_url!: string;

  @Column({ type: 'text', nullable: true })
  cover_letter!: string;

  @Column({ default: true })
  is_available!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
