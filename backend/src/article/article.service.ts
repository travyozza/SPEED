import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Article } from './schemas/article.schema';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name) 
        private articleModel: mongoose.Model<Article>
    ) {}

    async findAll(){
        const articles = await this.articleModel.find()
        return articles;
    }

    async create(article: Article): Promise<Article>{
        const res = await this.articleModel.create(article)
        return res;
    }

    async findByID(id: string): Promise<Article>{
        const article = await this.articleModel.findById(id)

        if(!article){
            throw new Error('Article not found');
        }
        
        return article;
    }
}
