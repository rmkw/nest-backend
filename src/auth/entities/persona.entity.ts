import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Persona {
  _id?: string;

  @Prop({ required: true })
  num_emp?: string;

  @Prop({ minlength: 3, required: true })
  nombres: string;

  @Prop({ required: true })
  des_area?: string;
}

export const UserSchema = SchemaFactory.createForClass(Persona);
