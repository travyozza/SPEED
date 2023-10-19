import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Article } from './schemas/article.schema';
import { Query } from 'express-serve-static-core';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
    constructor(
        @InjectModel(Article.name) 
        private articleModel: mongoose.Model<Article>
    ) {}

    async findAll(query: Query){
        const keyword = query.keyword ? { 
            title:{
                $regex: query.keyword,
                $options: 'i',
            }
        } : {}
        const articles = await this.articleModel.find( {...keyword})
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

    async delete(id: number): Promise<void> {
        // Use the articleModel to delete the article by its ID
        const deletedArticle = await this.articleModel.findByIdAndDelete(id);

        if (!deletedArticle) {
            throw new Error('Article not found for deletion');
        }
    }

    async update(id: string, article: CreateArticleDto): Promise<Article> {
      // Use the articleModel to update the article by its ID
      const updatedArticle = await this.articleModel.findByIdAndUpdate(id, article, { new: true });
  
      if (!updatedArticle) {
          throw new Error('Article not found for update');
      }
  
      return updatedArticle;
  }
  
}
