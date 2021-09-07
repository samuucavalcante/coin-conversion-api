import { findCurrency } from 'currency-formatter';
import IConvertCoinProvider from '../models/IConvertCoinProvider';
import api from '@shared/service/api';
import { CoinsShort } from '@modules/coin/types/ICoinsShort';
import AppError from '@shared/Error/AppError';

type NodeCoinApiConvertProviderResponse = {
  result: number;
};

export default class NodeCoinApiConvertProvider
  implements IConvertCoinProvider
{
  public async convert(
    amount: number,
    from: CoinsShort,
    to: CoinsShort,
  ): Promise<number | null> {
    try {
      const { data } = await api.get<NodeCoinApiConvertProviderResponse>(
        'rates/convert',
        {
          params: {
            from,
            to,
            amount,
          },
        },
      );
        const { result } = data;
        return result;
    } catch (err) {
      return null;
    }
  }
}
