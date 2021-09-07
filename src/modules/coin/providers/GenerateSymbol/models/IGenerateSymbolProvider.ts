import { CoinsShort } from "@modules/coin/types/ICoinsShort";

export default interface IGenerateSymbolProvider {
  generate(coin: CoinsShort | string): string | undefined; 
}