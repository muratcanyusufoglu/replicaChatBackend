import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class LastMessages extends Document {
  @Prop()
  whom: string;

  @Prop()
  user: string;

  @Prop()
  response: string;

  @Prop()
  date: string;
}

export const LastMessageSchema = SchemaFactory.createForClass(LastMessages);
