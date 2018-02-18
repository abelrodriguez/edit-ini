import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Items {

  @PrimaryGeneratedColumn()
  item_pk: number;

  @Column({
    nullable: true
  })
  group_pk: number;

  @Column({
    nullable: true
  })
  item_name: string;

  @Column({
    nullable: true
  })
  description: string;

  @Column({
    nullable: true
  })
  default_value: string;
}
