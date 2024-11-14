import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Persona, UserSchema } from './entities/persona.entity';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Persona.name, schema: UserSchema }]),
  ],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
