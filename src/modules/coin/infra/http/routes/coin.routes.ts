import { response, Router } from 'express';
import ConvertCoinController from '../controllers/ConvertCoinController';

const coinRouter = Router();

const convertCoinController = new ConvertCoinController();

coinRouter.get('/:amount/:from/:to', convertCoinController.convertCoin);
coinRouter.get('/', (request, response) => {
  response.json({ message: 'Hello World' });
})

export default coinRouter;