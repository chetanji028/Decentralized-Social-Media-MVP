 
import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
  async verifySignature(address: string, signature: string, message: string) {
    try {
      const signerAddress = ethers.utils.verifyMessage(message, signature);
      if (signerAddress.toLowerCase() === address.toLowerCase()) {
        return { verified: true, address };
      }
      return { verified: false };
    } catch (error) {
      return { verified: false, error: error.message };
    }
  }
}