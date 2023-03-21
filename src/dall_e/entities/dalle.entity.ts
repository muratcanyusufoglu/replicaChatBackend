import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Dalle extends Document {
  @Prop()
  prompt: string;

  @Prop()
  user: string;

  @Prop()
  userId: string;

  @Prop()
  userPhoto: string;
 
  @Prop()
  response: string;

  @Prop()
  likeNumber: number;

}

export const DalleSchema = SchemaFactory.createForClass(Dalle);
