import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Departamento {
  _id?: string;

  @Prop({ required: true })
  name?: string;

  @Prop({ minlength: 3, })
  icon?: string;

  @Prop({ required: true })
  res_num_emp?: number;

  @Prop({ required: true })
  sub_id: number;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
