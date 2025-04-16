import { Injectable } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { WeatherResponseDto } from './dto/weather-response.dto';

@Injectable()
export class WeatherService {
  getCityWeather(cityName: string): WeatherResponseDto {

    const weatherResponse = new WeatherResponseDto();
    weatherResponse.city = cityName;
    weatherResponse.temp = Math.floor(Math.random() * 30) + (-15); // Temperatura aleatória entre -15 e 40°C
    weatherResponse.unit = 'Celsius';
    
    return weatherResponse;
  }

}
