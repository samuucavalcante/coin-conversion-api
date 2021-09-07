import { CoinsShort } from "./ICoinsShort";

export interface IConvertCoinResponse {
  valorConvertido: number;
  simboloMoeda: string | undefined;
}

export interface IConvertCoinRequest {
  amount: number;
  from: CoinsShort;
  to: CoinsShort;
}


