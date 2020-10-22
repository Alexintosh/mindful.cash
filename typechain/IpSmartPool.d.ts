/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from "ethers";
import {Listener, Provider} from "ethers/providers";
import {Arrayish, BigNumber, BigNumberish, Interface} from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IpSmartPoolInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([_src, _dst]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{encode([_whom]: [string]): string}>;

    calcTokensForAmount: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    exitPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    getController: TypedFunctionDescription<{encode([]: []): string}>;

    getTokens: TypedFunctionDescription<{encode([]: []): string}>;

    joinPool: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    totalSupply: TypedFunctionDescription<{encode([]: []): string}>;

    transfer: TypedFunctionDescription<{
      encode([_dst, _amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([_src, _dst, _amount]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([_src, _dst, _amount]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class IpSmartPool extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IpSmartPool;
  attach(addressOrName: string): IpSmartPool;
  deployed(): Promise<IpSmartPool>;

  on(event: EventFilter | string, listener: Listener): IpSmartPool;
  once(event: EventFilter | string, listener: Listener): IpSmartPool;
  addListener(eventName: EventFilter | string, listener: Listener): IpSmartPool;
  removeAllListeners(eventName: EventFilter | string): IpSmartPool;
  removeListener(eventName: any, listener: Listener): IpSmartPool;

  interface: IpSmartPoolInterface;

  functions: {
    allowance(
      _src: string,
      _dst: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _src: string,
      _dst: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    approve(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(
      _whom: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _whom: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    calcTokensForAmount(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      tokens: string[];
      amounts: BigNumber[];
      0: string[];
      1: BigNumber[];
    }>;

    "calcTokensForAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<{
      tokens: string[];
      amounts: BigNumber[];
      0: string[];
      1: BigNumber[];
    }>;

    exitPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "exitPool(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getController(overrides?: TransactionOverrides): Promise<string>;

    "getController()"(overrides?: TransactionOverrides): Promise<string>;

    getTokens(overrides?: TransactionOverrides): Promise<string[]>;

    "getTokens()"(overrides?: TransactionOverrides): Promise<string[]>;

    joinPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "joinPool(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    transfer(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(
    _src: string,
    _dst: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    _src: string,
    _dst: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  approve(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(
    _whom: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  "balanceOf(address)"(
    _whom: string,
    overrides?: TransactionOverrides
  ): Promise<BigNumber>;

  calcTokensForAmount(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    tokens: string[];
    amounts: BigNumber[];
    0: string[];
    1: BigNumber[];
  }>;

  "calcTokensForAmount(uint256)"(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<{
    tokens: string[];
    amounts: BigNumber[];
    0: string[];
    1: BigNumber[];
  }>;

  exitPool(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "exitPool(uint256)"(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getController(overrides?: TransactionOverrides): Promise<string>;

  "getController()"(overrides?: TransactionOverrides): Promise<string>;

  getTokens(overrides?: TransactionOverrides): Promise<string[]>;

  "getTokens()"(overrides?: TransactionOverrides): Promise<string[]>;

  joinPool(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "joinPool(uint256)"(
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

  transfer(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    _src: string,
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    _src: string,
    _dst: string,
    _amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;

    Transfer(
      _src: string | null,
      _dst: string | null,
      _amount: null
    ): EventFilter;
  };

  estimate: {
    allowance(
      _src: string,
      _dst: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      _src: string,
      _dst: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    approve(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    balanceOf(
      _whom: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      _whom: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    calcTokensForAmount(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "calcTokensForAmount(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    exitPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "exitPool(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    getController(overrides?: TransactionOverrides): Promise<BigNumber>;

    "getController()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    getTokens(overrides?: TransactionOverrides): Promise<BigNumber>;

    "getTokens()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    joinPool(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "joinPool(uint256)"(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: TransactionOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: TransactionOverrides): Promise<BigNumber>;

    transfer(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    transferFrom(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      _src: string,
      _dst: string,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
