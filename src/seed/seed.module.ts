import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { HttpModule } from '@nestjs/axios';

import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [HttpModule, PokemonModule, CommonModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
