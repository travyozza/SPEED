import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticleController {
    constructor(private articleService: ArticleService){}

    @Get()
    async getAllArticles(): Promise<Article[]>{
        return this.articleService.findAll();
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

}
