import { Router } from 'express';
import coinRouter from '@modules/coin/infra/http/routes/coin.routes';

const app = Router();

app.use('/exchange', coinRouter)

export default app;