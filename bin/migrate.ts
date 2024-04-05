#!/usr/bin/env ts-node-script

import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import pickVariable from '#/utils/pick-variable';

(() => {
  const connection = postgres(pickVariable<string>('POSTGRES_URL'), {
    max: 1,
    onnotice: () => {}
  });

  migrate(drizzle(connection), {
    migrationsFolder: 'postgres/migrations'
  }).then(() => connection.end());
})();
