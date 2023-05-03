import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop() id?: string;
    @Prop({ required: true }) name: string;
    @Prop({ required: true }) phone: string;
    @Prop({
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
      unique: true,
    }) email: string;
    @Prop({ default: "Initiated" ,required: true }) status: string;
    @Prop({ required: true }) externalId: string;
    @Prop({ default: Date.now, required: true }) createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);