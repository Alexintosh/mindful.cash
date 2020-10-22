/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {ReentryProtectionStorage} from "./ReentryProtectionStorage";

export class ReentryProtectionStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<ReentryProtectionStorage> {
    return super.deploy(overrides) as Promise<ReentryProtectionStorage>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): ReentryProtectionStorage {
    return super.attach(address) as ReentryProtectionStorage;
  }
  connect(signer: Signer): ReentryProtectionStorageFactory {
    return super.connect(signer) as ReentryProtectionStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentryProtectionStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentryProtectionStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "rpSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60c2610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063830df852146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b604051806022606b8239602201905060405180910390208156fe5265656e74727950726f74656374696f6e2e73746f726167652e6c6f636174696f6ea2646970667358221220bb3f38b4a11ece324dbdd66c5b0fdb86286171afd1bd64ae4f61eeca57a9c44d64736f6c63430006040033";
