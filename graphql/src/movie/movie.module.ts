import { Module } from '@nestjs/common';
import { UserResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
  providers: [UserResolver, MovieService],
})
export class UserModule {}
