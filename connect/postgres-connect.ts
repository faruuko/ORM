import postgres from 'postgres';
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import pickVariable from '#/utils/pick-variable';
import schema from '#/postgres/schema';

export default (): PostgresJsDatabase<typeof schema> => {
  return drizzle(postgres(pickVariable<string>('POSTGRES_URL')), {
    schema
  });
};
