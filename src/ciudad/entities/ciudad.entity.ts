import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({name: "ciudad"})
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;

  constructor(pNombre: string) {
    this.nombre = pNombre;
  }

  public getID(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(pNombre: string): void {
    this.nombre = pNombre;
  }
}
