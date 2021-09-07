import { CoinsShort } from "@modules/coin/types/ICoinsShort";

export default interface IConvertCoinProvider {
  convert(amount: number | string, from: CoinsShort | string, to: CoinsShort | string): Promise<number | null>;
}