import { env } from '~/env'
import { CorsOptions } from 'cors'

const allowedOrigins = [env.FRONT_LOCAL_URL]

export const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
  optionsSuccessStatus: 200
}
