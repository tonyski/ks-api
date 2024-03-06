import 'dotenv/config'

// 读取环境变量
const { DATABASE_URL } = process.env

export default {
  schema: './src/schema/index.ts',
  out: './drizzle',
  driver: 'mysql2',
  dbCredentials: DATABASE_URL!,
}
