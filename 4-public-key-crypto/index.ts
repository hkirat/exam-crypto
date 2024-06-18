import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { decodeUTF8 } from "tweetnacl-util";
 
const keypair = Keypair.generate();
 
const message = "The attack will happen at xyz";
const messageBytes = decodeUTF8(message);
 
const signature = nacl.sign.detached(messageBytes, keypair.secretKey);
console.log(signature);

const result = nacl.sign.detached.verify(
  messageBytes,
  signature,
  keypair.publicKey.toBytes(),
);
 
console.log(result);