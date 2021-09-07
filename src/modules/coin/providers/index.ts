import { container } from 'tsyringe';

import IConvertCoinProvider from './CovertCoin/models/IConvertCoinProvider';
import NodeCoinApiConvertProvider from './CovertCoin/implementations/NodeCoinAPiConvertProvider';

import IGenerateSymbolProvider from './GenerateSymbol/models/IGenerateSymbolProvider';
import CurrencyFormatterProvider from './GenerateSymbol/implementations/CurrencyFormatterProvider';

container.registerSingleton<IConvertCoinProvider>('ConvertCoinProvider', NodeCoinApiConvertProvider);
container.registerSingleton<IGenerateSymbolProvider>('GenerateSymbolProvider', CurrencyFormatterProvider);