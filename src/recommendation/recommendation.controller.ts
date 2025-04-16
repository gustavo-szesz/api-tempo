import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { WeatherService } from '../weather/weather.service';
import { WeatherResponseDto } from '../weather/dto/weather-response.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';

@Controller('recommendation')
export class RecommendationController {
  constructor(
    private readonly recommendationService: RecommendationService,
    private readonly weatherService: WeatherService, 
  ) {}
  
  @Get(':city')
  getRecomendation(@Param('city') city: string): Promise<WeatherResponseDto> {
    return this.recommendationService.getRecommendation(city);
  }

}
