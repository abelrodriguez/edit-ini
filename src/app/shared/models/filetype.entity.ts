import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Filetype {

  @PrimaryGeneratedColumn()
  filetype_pk: number;

  @Column()
  name: string;
}
