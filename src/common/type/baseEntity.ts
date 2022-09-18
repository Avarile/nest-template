import {
  BaseEntity as TypeormBaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IBaseEntity as DbBaseEntity } from './type';

export abstract class BaseEntity
  extends TypeormBaseEntity
  implements DbBaseEntity
{
  // this is the most basic Entity
  // all other entity will extend this entity.
  // BTW soft delete resides in delete function which will trigger the updates of deletedAt
  @PrimaryGeneratedColumn({ comment: 'id' })
  id: number;

  @CreateDateColumn({ comment: 'create time' })
  createdAt: Date;

  @UpdateDateColumn({ comment: 'update time' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: 'delete time' })
  deletedAt: Date;

  @Column({default:false})
  deleted: boolean;
}
