// src/utils/web3.ts
import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'

const MAINNET_RPC_URL = 'https://mainnet.infura.io/v3/<INFURA_KEY>' // Replace with your Infura key
const injected = injectedModule()

export const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl: MAINNET_RPC_URL
    },
    {
      id: '0xa4b1',
      token: 'ARB-ETH',
      label: 'Arbitrum One',
      rpcUrl: 'https://rpc.ankr.com/arbitrum'
    },
    {
      id: '0xa4ba',
      token: 'ARB',
      label: 'Arbitrum Nova',
      rpcUrl: 'https://nova.arbitrum.io/rpc'
    },
    {
      id: '0x2105',
      token: 'ETH',
      label: 'Base',
      rpcUrl: 'https://mainnet.base.org'
    },
    {
      id: '0xa4ec',
      token: 'ETH',
      label: 'Celo',
      rpcUrl: 'https://1rpc.io/celo'
    },
    {
      id: '0x28971353642',
      token: 'DEGEN',
      label: 'Degen',
      rpcUrl: 'https://rpc.degen.tips'
    },
    {
      id: '0x890',
      token: 'SNAXETH',
      label: 'SNAX Chain',
      rpcUrl: 'https://mainnet.snaxchain.io'
    }
  ],
  accountCenter: {
    mobile: {
      enabled: false
    },
    desktop: {
      enabled: false
    }
  },
  notify: {
    enabled: false
  }
})