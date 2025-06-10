 
import { configureChains, createConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

export { RainbowKitProvider, chains };