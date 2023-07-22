import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, PromiseProvider } from 'mongoose';

@Schema()
class MessageArray extends Document {
  @Prop()
  whom: string;

  @Prop()
  message: string;

  @Prop()
  response: string;

  @Prop()
  date: string;
}

@Schema()
export class Messages extends Document {
  @Prop()
  userId: string;

  @Prop()
  whom: string;

  @Prop()
  userPhoto: string;

  @Prop()
  messageArray: MessageArray[];
}

export const MessageSchema = SchemaFactory.createForClass(Messages);
