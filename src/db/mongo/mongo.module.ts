import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

console.log(process.env.DB_URI);
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI)],
})
export class MongoModule {}
