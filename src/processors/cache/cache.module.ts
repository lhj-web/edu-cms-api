/**
 * @file Cache module
 * @module processor/cache/module
 * @author Name6
 */

import { Global, Module, CacheModule as NestCacheModule } from '@nestjs/common';
import { CacheConfigService } from './cache.config.service';
import { CacheService } from './cache.service';

@Global()
@Module({
  imports: [
    // https://docs.nestjs.com/techniques/caching#different-stores
    NestCacheModule.registerAsync({
      useClass: CacheConfigService,
      inject: [CacheConfigService],
    }),
  ],
  providers: [CacheConfigService, CacheService],
  exports: [CacheService],
})
export class CacheModule {}
