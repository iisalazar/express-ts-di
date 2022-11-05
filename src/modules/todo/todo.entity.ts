import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export interface ITodo {
  id: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

@Entity({
  name: "todo",
})
export class Todo implements ITodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  description: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: string;

  @Column({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: string;
}
