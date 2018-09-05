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

  @Column('double')
  views: number

  @Column()
  isPublished: boolean
}
