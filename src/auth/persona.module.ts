import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, PersonaSchema } from './entities/persona.entity';
import { PersonaService } from './services/persona.service';
import { PersonaController } from './controllers/persona.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Persona.name, schema: PersonaSchema }]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
