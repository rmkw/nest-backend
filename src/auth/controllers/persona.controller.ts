import { Controller, Get } from '@nestjs/common';
import { PersonaService } from '../services/persona.service';
import { Persona } from '../entities/persona.entity';

@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Get()
  async findAllController(): Promise<Persona[]> {
    return this.personaService.findAll();
  }
}
