import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Persona } from '../entities/persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectModel(Persona.name) private personaModel: Model<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return this.personaModel.find().exec();
  }
}
