import { createClient } from 'redis';
import { RedisConnection } from 'redis-om';
import pickVariable from '#/utils/pick-variable';

export default async (): Promise<RedisConnection> => {
  return createClient({
    url: pickVariable<string>('REDIS_URL')
  }).connect();
};
