import { mysqlTable, serial, int } from 'drizzle-orm/mysql-core'

export const test = mysqlTable('test', {
  id: serial('id').primaryKey(),
  count: int('count').default(0),
})
