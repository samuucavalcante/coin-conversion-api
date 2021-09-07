import {
  NextFunction,
  request,
  Request,
  response,
  Response,
} from 'express';
import { ParamsDictionary } from 'express-serve-static-core'
import { container } from 'tsyringe';
import ConvertCoinService, { ConvertCoinResponse } from '@modules/coin/services/ConvertCoinService';
import { IConvertCoinRequest } from '@modules/coin/types/IConvertCoinResponse';
import AppError from '@shared/Error/AppError';


export default class ConvertCoinController {
  public async convertCoin(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { amount, from, to } = req.params 

      const convertCoinService = container.resolve(ConvertCoinService);
      const result = await convertCoinService.execute({
        amount,
        from,
        to,
      }); 

      return res.json(result);
    } catch (err: any) {
      return res.json({ err: err.message });
    }
  }
}
