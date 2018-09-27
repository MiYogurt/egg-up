import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export default class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100
  })
  name: string

  @Column('text')
  description: string

  @Column()
  filename: string

  @Column('double', {default: 0})
  views: number

  @Column()
  isPublished: boolean
}
