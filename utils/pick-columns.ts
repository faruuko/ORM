import { sql } from 'drizzle-orm';
import { char, timestamp } from 'drizzle-orm/pg-core';
import createID from '#/utils/create-id';

export default (identifiers: string[], options: { prefix: string }): object => {
  const columns = {
    id: char('id', { length: 31 })
      .default(createID(options.prefix))
      .primaryKey(),
    createdAt: timestamp('created_at', {
      mode: 'date',
      precision: 3,
      withTimezone: true
    })
      .default(sql`now()`)
      .notNull(),
    updatedAt: timestamp('updated_at', {
      mode: 'date',
      precision: 3,
      withTimezone: true
    }).$onUpdate(() => new Date()),
    deletedAt: timestamp('deleted_at', {
      mode: 'date',
      precision: 3,
      withTimezone: true
    })
  };

  if (identifiers.length <= 0) return columns;

  const selectedColumns = {};

  identifiers.forEach((identifier) => {
    if (Object.prototype.hasOwnProperty.call(columns, identifier)) {
      selectedColumns[identifier] = columns[identifier];
    }
  });

  return selectedColumns;
};
