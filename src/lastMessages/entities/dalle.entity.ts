import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dalle extends Document {
  @Prop()
  date: string;

  @Prop()
  user: string;

  @Prop()
  response: string;

  @Prop()
  whom: string;
}

export const DalleSchema = SchemaFactory.createForClass(Dalle);
