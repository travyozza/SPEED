import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  readonly title: string;

  @IsArray()
  readonly authors: string[];

  @IsString()
  readonly journalName: string;

  @IsNumber()
  readonly yearOfPublication: number;

  @IsNumber()
  readonly volume: number;

  @IsNumber()
  readonly number: number;

  @IsString()
  readonly pages: string;

  @IsString()
  readonly doi: string;
}