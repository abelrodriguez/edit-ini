import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Filetype } from './filetype.entity';

@Entity()
export class Files {

  @PrimaryGeneratedColumn()
  file_pk: number;

  @ManyToOne(type => Filetype, filetype => filetype.filetype_pk)
  @JoinColumn({ name: 'filetype_pk'})
  filetype_pk: Filetype;

  @Column()
  filename: string;

  @Column({
    nullable: true
  })
  description: string;

}
