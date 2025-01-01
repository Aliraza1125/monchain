// src/hooks/useWeb3.ts
import { useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { onboard } from '@/utils/web3'
import type { WalletState } from '@web3-onboard/core'

type ConnectedWallet = WalletState & {
  label: string
  accounts: Array<{ address: string; balance: { type: string; asset: string; value: string } }>
  chains: Array<{ id: string; label: string }>
}

type EthersProvider = ethers.BrowserProvider

type WalletConnection = {
  wallet: ConnectedWallet
  provider: EthersProvider
  signer: ethers.Signer
} | null

export const useWeb3 = () => {
  const [wallet, setWallet] = useState<ConnectedWallet | null>(null)
  const [provider, setProvider] = useState<EthersProvider | null>(null)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)

  const connectWallet = useCallback(async (): Promise<WalletConnection> => {
    try {
      const wallets = await onboard.connectWallet()
      
      if (wallets[0]) {
        const connectedWallet = wallets[0] as ConnectedWallet
        setWallet(connectedWallet)
        
        console.log('Wallet connected:', connectedWallet)
        // Log detailed wallet information
        console.log('Connected Wallet Details:', {
          label: connectedWallet.label,
          accounts: connectedWallet.accounts,
          chains: connectedWallet.chains,
          provider: connectedWallet.provider
        })

        // Log selected chain information
        console.log('Connected Chain:', {
          chainId: connectedWallet.chains[0]?.id,
          name: connectedWallet.chains[0]?.label
        })

        // Log account information
        console.log('Connected Account:', {
          address: connectedWallet.accounts[0]?.address,
          balance: connectedWallet.accounts[0]?.balance
        })
        
        const ethersProvider = new ethers.BrowserProvider(connectedWallet.provider)
        const ethersSigner = await ethersProvider.getSigner()
        
        setProvider(ethersProvider)
        setSigner(ethersSigner)

        // Log provider and signer information
        console.log('Ethers Provider and Signer:', {
          provider: ethersProvider,
          signer: ethersSigner,
          network: await ethersProvider.getNetwork()
        })
        
        return {
          wallet: connectedWallet,
          provider: ethersProvider,
          signer: ethersSigner
        }
      }
      return null
    } catch (error) {
      console.error('Error connecting wallet:', error)
      return null
    }
  }, [])

  const disconnectWallet = useCallback(async () => {
    if (wallet) {
      await onboard.disconnectWallet({ label: wallet.label })
      setWallet(null)
      setProvider(null)
      setSigner(null)
      console.log('Wallet disconnected')
    }
  }, [wallet])

  const getWalletAddress = useCallback(() => {
    if (wallet && wallet.accounts[0]) {
      try {
        const address = wallet.accounts[0].address
        return `${address.slice(0, 6)}...${address.slice(-4)}`
      } catch (error) {
        console.error('Error getting wallet address:', error)
        return ''
      }
    }
    return ''
  }, [wallet])

  return {
    wallet,
    provider,
    signer,
    connectWallet,
    disconnectWallet,
    getWalletAddress,
    isConnected: !!wallet
  }
}