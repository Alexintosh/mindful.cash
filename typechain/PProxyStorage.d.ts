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

interface PProxyStorageInterface extends Interface {
  functions: {
    addressToBytes32: TypedFunctionDescription<{
      encode([_value]: [string]): string;
    }>;

    bytes32ToAddress: TypedFunctionDescription<{
      encode([_value]: [Arrayish]): string;
    }>;

    bytes32ToString: TypedFunctionDescription<{
      encode([_value]: [Arrayish]): string;
    }>;

    readAddress: TypedFunctionDescription<{encode([_key]: [Arrayish]): string}>;

    readBool: TypedFunctionDescription<{encode([_key]: [Arrayish]): string}>;

    readString: TypedFunctionDescription<{encode([_key]: [Arrayish]): string}>;

    storageRead: TypedFunctionDescription<{encode([_key]: [Arrayish]): string}>;

    stringToBytes32: TypedFunctionDescription<{
      encode([_value]: [string]): string;
    }>;
  };

  events: {};
}

export class PProxyStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): PProxyStorage;
  attach(addressOrName: string): PProxyStorage;
  deployed(): Promise<PProxyStorage>;

  on(event: EventFilter | string, listener: Listener): PProxyStorage;
  once(event: EventFilter | string, listener: Listener): PProxyStorage;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): PProxyStorage;
  removeAllListeners(eventName: EventFilter | string): PProxyStorage;
  removeListener(eventName: any, listener: Listener): PProxyStorage;

  interface: PProxyStorageInterface;

  functions: {
    addressToBytes32(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "addressToBytes32(address)"(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<string>;

    bytes32ToAddress(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "bytes32ToAddress(bytes32)"(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    bytes32ToString(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "bytes32ToString(bytes32)"(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    readAddress(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "readAddress(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    readBool(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    "readBool(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<boolean>;

    readString(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "readString(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    storageRead(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "storageRead(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<string>;

    stringToBytes32(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<string>;

    "stringToBytes32(string)"(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<string>;
  };

  addressToBytes32(
    _value: string,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "addressToBytes32(address)"(
    _value: string,
    overrides?: TransactionOverrides
  ): Promise<string>;

  bytes32ToAddress(
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "bytes32ToAddress(bytes32)"(
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  bytes32ToString(
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "bytes32ToString(bytes32)"(
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  readAddress(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "readAddress(bytes32)"(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  readBool(_key: Arrayish, overrides?: TransactionOverrides): Promise<boolean>;

  "readBool(bytes32)"(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<boolean>;

  readString(_key: Arrayish, overrides?: TransactionOverrides): Promise<string>;

  "readString(bytes32)"(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  storageRead(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "storageRead(bytes32)"(
    _key: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<string>;

  stringToBytes32(
    _value: string,
    overrides?: TransactionOverrides
  ): Promise<string>;

  "stringToBytes32(string)"(
    _value: string,
    overrides?: TransactionOverrides
  ): Promise<string>;

  filters: {};

  estimate: {
    addressToBytes32(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "addressToBytes32(address)"(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    bytes32ToAddress(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "bytes32ToAddress(bytes32)"(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    bytes32ToString(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "bytes32ToString(bytes32)"(
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    readAddress(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "readAddress(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    readBool(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "readBool(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    readString(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "readString(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    storageRead(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "storageRead(bytes32)"(
      _key: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    stringToBytes32(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;

    "stringToBytes32(string)"(
      _value: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>;
  };
}
