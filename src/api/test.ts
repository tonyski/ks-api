import { Hono } from 'hono'
import { test } from '../schema/index'
import { db } from '../db'
import { eq } from 'drizzle-orm'

const testRoute = new Hono()

const findFirst = async () => {
  const result = await db.select().from(test).limit(1)
  return result[0]
}

testRoute.get('/', async (c) => {
  return c.json(await findFirst())
})

testRoute.post('/', async (c) => {
  const body = await c.req.json()
  await db.update(test).set(body).where(eq(test.id, 1))
  return await c.json(await findFirst())
})

export default testRoute
