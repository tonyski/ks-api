import { Hono } from 'hono'
import { test } from '../schema/index'
import { db } from '../db'
import { eq } from 'drizzle-orm'

const testRoute = new Hono()

testRoute.get('/', async (c) => {
  const result = await db.query.test.findFirst()
  return c.json(result)
})

testRoute.post('/', async (c) => {
  const body = await c.req.json()
  await db.update(test).set(body).where(eq(test.id, 1))
  return c.json(await db.query.test.findFirst())
})

export default testRoute
