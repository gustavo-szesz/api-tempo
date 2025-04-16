import { Injectable } from '@nestjs/common';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { WeatherService } from 'src/weather/weather.service';

interface RecommendationResponse {
  city: string;
  temp: number;
  unit: string;
  recommendation: string;
}

@Injectable()
export class RecommendationService {
  constructor(private readonly weatherService: WeatherService) {}

  async getRecommendation(city: string): Promise<RecommendationResponse> {
    const weatherData = await this.weatherService.getCityWeather(city);

    let recommendation: string;

    if (weatherData.temp > 30) {
      recommendation = 'Recomendamos hidratação constante e uso de protetor solar.';
    } else if (weatherData.temp >= 15 && weatherData.temp <= 30) {
      recommendation = 'O clima está agradável hoje!';
    } else {
      recommendation = 'Recomendamos o uso de casaco hoje.';
    }

    return {
      city: weatherData.city,
      temp: weatherData.temp,
      unit: weatherData.unit,
      recommendation
    };
  }

}
