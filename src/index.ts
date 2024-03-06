import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import testRoute from './api/test'

const api = new Hono()

api.use('*', logger())
api.use('/*', cors())
api.use(prettyJSON())

api.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

api.route('/test', testRoute)

serve({ fetch: api.fetch, port: 3000 })
