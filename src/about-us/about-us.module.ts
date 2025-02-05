import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutUs, AboutUsSchema } from './entities/about-us.entity';
import { AboutUsService } from './about-us.service';
import { AboutUsController } from './about-us.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: AboutUs.name, schema: AboutUsSchema }])],
  controllers: [AboutUsController],
  providers: [AboutUsService]
})
export class AboutUsModule {}
