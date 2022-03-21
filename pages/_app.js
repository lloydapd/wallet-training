import { ChakraProvider } from '@chakra-ui/react'
import { UseWalletProvider } from 'use-wallet'

function MyApp({ Component, pageProps }) {
  return (
    <UseWalletProvider
      connectors={{
        injected: {
          chainId: [1, 56],
        },
        walletconnect: {
          chainId: 1,
          rpc: { 1: 'https://mainnet.eth.aragon.network/', 137: "https://matic-mainnet.chainstacklabs.com" }
        },
        walletlink: {
          chainId: 1,
          url: 'https://mainnet.eth.aragon.network/',
        },
      }}
      >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UseWalletProvider>
  )
}

export default MyApp
