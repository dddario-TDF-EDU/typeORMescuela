import { Injectable } from '@nestjs/common';
import { Ciudad } from './entities/ciudad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  private ciudades: Ciudad[] = [];

  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  public async traerTodosRaw(): Promise<Ciudad[]> {
    this.ciudades = [];
    let datos = await this.ciudadRepository.query('select * from ciudad');

    datos.forEach((element) => {
      let ciudad: Ciudad = new Ciudad(element['nombre']);
      this.ciudades.push(ciudad);
    });
    return this.ciudades;
  }

  public async traerTodosORM(): Promise<Ciudad[]> {
    return await this.ciudadRepository.find();
  }
}
