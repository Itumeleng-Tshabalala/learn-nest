import { Module } from '@nestjs/common';
import { ResourceModule } from './resouces/resource.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://Itumeleng:itumeleng@cluster0.r6wnj.mongodb.net/nest_js_db?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ResourceModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
