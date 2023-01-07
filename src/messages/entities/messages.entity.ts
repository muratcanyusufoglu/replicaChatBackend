import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Messages extends Document {
  @Prop()
  message: string;

  @Prop()
  user: string;

  @Prop()
  date: string;
}

export const MessageSchema = SchemaFactory.createForClass(Messages);
