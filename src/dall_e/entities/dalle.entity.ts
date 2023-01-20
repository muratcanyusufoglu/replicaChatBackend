import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Dalle extends Document {
  @Prop()
  prompt: string;

  @Prop()
  user: string;

  @Prop()
  response: string;
}

export const DalleSchema = SchemaFactory.createForClass(Dalle);
