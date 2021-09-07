import IGenerateSymbolProvider from "../models/IGenerateSymbolProvider";
import { Currency, findCurrency } from 'currency-formatter';

export default class CurrencyFormatterProvider implements IGenerateSymbolProvider {
  generate(coin: string): string | undefined {
    const result = findCurrency(coin);
    const symbol = result?.symbol;
    
    return symbol;
  }

}