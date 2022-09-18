import { BaseEntity } from 'src/common/type';
import {
  Entity,
  Column,
  Unique,
  BeforeUpdate,
  Index,
  BeforeInsert,
} from 'typeorm';

@Entity()
@Unique(['username', 'email'])
@Index(['username', 'email'])
export class User extends BaseEntity {
  // basic info
  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  verified: boolean;

  // Authentication
  @Column({ default: 0 })
  permissions: 0 | 1 | 2 | 3;

  // optional info
  @Column({ nullable: true })
  companys: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  bio?: string;

  @Column({ nullable: true })
  position?: string;

  @Column({ nullable: true })
  organization?: string;

  @Column({ nullable: true })
  personalTags?: string;

  // address info
  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  address_city?: string;

  @Column({ nullable: true })
  address_state?: string;

  @Column({ nullable: true })
  address_zip?: number;

  @BeforeUpdate()
  ToLowerCase_update() {
    this.username = this.username.toLowerCase();
    this.email = this.email.toLowerCase();
  }

  @BeforeInsert()
  ToLowerCase_insert() {
    this.username = this.username.toLowerCase();
    this.email = this.email.toLowerCase();
  }
}
