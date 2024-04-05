import {
  createClient,
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts
} from 'redis';
import pickVariable from '#/utils/pick-variable';

export default async (): Promise<
  RedisClientType<RedisModules, RedisFunctions, RedisScripts>
> => {
  return createClient({
    url: pickVariable<string>('REDIS_URL')
  }).connect();
};
