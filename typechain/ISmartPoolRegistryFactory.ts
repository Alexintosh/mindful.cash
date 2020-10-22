/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, Signer} from "ethers";
import {Provider} from "ethers/providers";

import {ISmartPoolRegistry} from "./ISmartPoolRegistry";

export class ISmartPoolRegistryFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISmartPoolRegistry {
    return new Contract(address, _abi, signerOrProvider) as ISmartPoolRegistry;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_smartPool",
        type: "address"
      }
    ],
    name: "addSmartPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "entries",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address"
      }
    ],
    name: "inRegistry",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "removeSmartPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
