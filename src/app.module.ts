import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { RecommendationModule } from './recommendation/recommendation.module';

@Module({
  imports: [WeatherModule, RecommendationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
