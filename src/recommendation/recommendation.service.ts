import { Injectable } from '@nestjs/common';
import { WeatherService } from '../weather/weather.service';
import { WeatherResponseDto } from '../weather/dto/weather-response.dto';

@Injectable()
export class RecommendationService {
  constructor(private readonly weatherService: WeatherService) {}

  async getRecommendation(city: string): Promise<WeatherResponseDto> {
    return await this.weatherService.getCityWeather(city);
  }
}
