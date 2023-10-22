import { Body, Controller, Get, Param, Post, Query, Delete, Put } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('articles')
export class ArticleController {
    constructor(private articleService: ArticleService){}

    @Get()
    async getAllArticles(@Query() query: ExpressQuery ): Promise<Article[]>{
        return this.articleService.findAll(query);
    }

    @Post()
    async createArticle(
        @Body()
        article: CreateArticleDto,
    ): Promise<Article>{
        return this.articleService.create(article);
    }

    @Get(':id')
    async getArticle(
        @Param('id') 
        id: string,
    ): Promise<Article>{
        return this.articleService.findByID(id);
    }

    /*
    @Delete(':id') // DELETE route to delete an article
    async deleteArticle(
        @Param('id') 
        id: number,
    ): Promise<void>{
        return this.articleService.delete(id);
    }

    
    @Put(':id') // PUT route to update an article
    async updateArticle(
        @Param('id') 
        id: string,
        @Body() article: CreateArticleDto,
    ): Promise<Article>{
        return this.articleService.update(id, article);
    }

    */

    // In your ArticleController

    @Put(':id')
    async updateAccepted(@Param('id') id: string, @Body('accepted') accepted: boolean): Promise<Article> {
    return this.articleService.updateAccepted(id, accepted);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
    return this.articleService.delete(id);
    }
/*
    @Put(':id')
    async update(@Param('id') id: string, @Body() article: Article): Promise<Article> {
    return this.articleService.update(id, article);
  }
    */
}
