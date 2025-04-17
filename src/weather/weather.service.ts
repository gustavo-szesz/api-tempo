import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { WeatherResponseDto } from './dto/weather-response.dto';

@Injectable()
export class WeatherService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}
  
  async getCityWeather(cityName: string): Promise<WeatherResponseDto> {
    const cacheKey = `weather_${cityName}`;
    const cachedData = await this.cacheManager.get<WeatherResponseDto>(cacheKey);
    
    if (cachedData) {
      console.log(`Retornando dados em cache para a cidade: ${cityName}`);
      return cachedData;
    }
    
    console.log(`Gerando novos dados de tempo para a cidade: ${cityName}`);
    
    const weatherResponse = new WeatherResponseDto();
    weatherResponse.city = cityName;
    weatherResponse.temp = Math.floor(Math.random() * 30) + (-15); // Temperatura aleatória entre -15 e 40°C
    weatherResponse.unit = 'Celsius';
    
    await this.cacheManager.set(cacheKey, weatherResponse);
    
    return weatherResponse;
  }
}
