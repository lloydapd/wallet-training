import { Box, Text, Button, HStack, VStack, Stack } from '@chakra-ui/react'
import { useWallet, UseWalletProvider } from 'use-wallet'

export default function Home() {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()
  const activate = (connector) => wallet.connect(connector)

  console.log("Block Number", blockNumber)
  console.log("Wallet", wallet)

  return (
    <Box>
      {wallet.status === 'connected' ? (
        <Box>
          <Text>Account: {wallet.account}</Text>
          <Text>Balance: {wallet.balance}</Text>
          <Text>Chain Id: {wallet.chainId}</Text>
          <Text>Block Number: {blockNumber}</Text>
          <Button onClick={() => wallet.reset()}>Disconnect</Button>
        </Box>
      ) : (
        <Box>
          Connect:
          <Button onClick={() => activate()}>MetaMask</Button>
          <Button onClick={() => activate('walletconnect')}>Wallet Connect</Button>
          <Button onClick={() => activate('walletlink')}>Wallet Link</Button>
        </Box>
      )}
    </Box>
  )
}
