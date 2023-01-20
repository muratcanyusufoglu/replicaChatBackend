import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

@Schema()
class MessageData extends Document {
  @Prop()
  message: string;

  @Prop()
  user: string;

  @Prop()
  response: string;

  @Prop()
  date: string;
}

@Schema()
export class Messages extends Document {
  @Prop()
  user: string;

  @Prop({type: MessageData})
  messageInfo: MessageData
} 

export const MessageSchema = SchemaFactory.createForClass(Messages);
