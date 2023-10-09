import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Article {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    authors: string[];

    @Prop({ required: true })
    journalName: string;

    @Prop({ required: true })
    yearOfPublication: number;

    @Prop({ required: true })
    volume: number;

    @Prop({ required: true })
    number: number;

    @Prop({ required: true })
    pages: string;

    @Prop({ required: true })
    doi: string;
    }

    export const ArticleSchema = SchemaFactory.createForClass(Article);
