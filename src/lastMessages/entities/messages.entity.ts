import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

@Schema()
class MessageData extends Document {
  @Prop()
  whom: string;

  @Prop()
  user: string;

  @Prop()
  response: string;

  @Prop()
  date: string;
}

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

export const MessageSchema = SchemaFactory.createForClass(LastMessages);
