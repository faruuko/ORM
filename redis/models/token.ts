import { Schema } from 'redis-om';

export enum Purpose {
  DEFAULT = 'DEFAULT'
}

export enum Status {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  EXPIRED = 'EXPIRED'
}

export default new Schema(
  'token',
  {
    status: { type: 'string' },
    purpose: { type: 'string' },
    userId: { type: 'string', field: 'user_id' },
    code: { type: 'string', indexed: false },
    attempts: { type: 'number', indexed: false },
    createdAt: { type: 'date', field: 'created_at', sortable: true },
    updatedAt: { type: 'date', field: 'updated_at', sortable: true }
  },
  {
    dataStructure: 'JSON'
  }
);
