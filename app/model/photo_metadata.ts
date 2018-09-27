import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BaseEntity
} from 'typeorm'
import Photo from '@model/photo'

@Entity()
export default class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int')
  height: number

  @Column('int')
  width: number

  @Column()
  orientation: string

  @Column()
  compressed: boolean

  @Column()
  comment: string

  @OneToOne(type => Photo)
  @JoinColumn()
  photo: Photo
}
