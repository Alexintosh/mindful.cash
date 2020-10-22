/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractFactory, Signer} from "ethers";
import {Provider} from "ethers/providers";
import {UnsignedTransaction} from "ethers/utils/transaction";

import {TransactionOverrides} from ".";
import {PCappedSmartPoolStorage} from "./PCappedSmartPoolStorage";

export class PCappedSmartPoolStorageFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<PCappedSmartPoolStorage> {
    return super.deploy(overrides) as Promise<PCappedSmartPoolStorage>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): PCappedSmartPoolStorage {
    return super.attach(address) as PCappedSmartPoolStorage;
  }
  connect(signer: Signer): PCappedSmartPoolStorageFactory {
    return super.connect(signer) as PCappedSmartPoolStorageFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCappedSmartPoolStorage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PCappedSmartPoolStorage;
  }
}

const _abi = [
  {
    inputs: [],
    name: "pcsSlot",
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
  "0x60c1610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063652062c5146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b604051806021606b8239602101905060405180910390208156fe50436170706564536d617274506f6f6c2e73746f726167652e6c6f636174696f6ea264697066735822122002a0f217577da3ec2edf2bded8da64a8d95b6dbc0d74b640058713bcc52a9d5964736f6c63430006040033";
