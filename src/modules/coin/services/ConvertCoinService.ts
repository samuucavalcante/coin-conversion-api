import { IConvertCoinResponse } from '../types/IConvertCoinResponse';
import api from '@shared/service/api';
import { inject, injectable } from 'tsyringe';
import ConvertCoinProvider from '@modules/coin/providers/CovertCoin/models/IConvertCoinProvider';
import AppError from '@shared/Error/AppError';
import { CoinsShort } from '../types/ICoinsShort';
import IGenerateSymbolProvider from '../providers/GenerateSymbol/models/IGenerateSymbolProvider';

export type ConvertCoinResponse = {
  amount: number | string;
  from: CoinsShort | string;
  to: CoinsShort | string;
};

@injectable()
export default class ConvertCoinService {
  constructor(
    @inject('ConvertCoinProvider')
    private convertCoinProvider: ConvertCoinProvider,

    @inject('GenerateSymbolProvider')
    private generateSymbolProvider: IGenerateSymbolProvider,
  ) {}

  public async execute({ 
    amount,
    from,
    to,
  }: ConvertCoinResponse): Promise<IConvertCoinResponse> {

    const valueConverted = await this.convertCoinProvider.convert(
      amount,
      from,
      to,
    );
    
    if (!valueConverted) {
      throw new AppError('Parametres must be format correct');
    }

    const symbol = this.generateSymbolProvider.generate(from)

    return {
      valorConvertido: valueConverted,
      simboloMoeda: symbol,
    };
  }
}
