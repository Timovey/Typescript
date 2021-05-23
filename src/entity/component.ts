import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Component {
  @PrimaryGeneratedColumn("increment")
  id: Number;

  @Column({ name: "name" })
  purchaseName: string;
}
