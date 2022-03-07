import Web3Modal from 'web3modal';
import detectEthereumProvider from '@metamask/detect-provider';
import { DeFiWeb3Connector } from 'deficonnect';
import * as DefiWalletConnectProvider from '@deficonnect/web3-provider';

const providerOptions = {
      injected: {
        display: {
          logo: 'https://github.com/MetaMask/brand-resources/raw/master/SVG/metamask-fox.svg',
          name: 'MetaMask',
          description: 'Connect with MetaMask in your browser',
        },
        package: null,
      },
      'custom-defiwallet': {
        display: {
          logo: cdcLogo,
          name: 'Crypto.com DeFi Wallet',
          description: 'Connect with the CDC DeFi Wallet',
        },
        options: {},
        package: DefiWalletConnectProvider,
        connector: async (ProviderPackage, options) => {
          const connector = new DeFiWeb3Connector({
            supportedChainIds: [25],
            rpc: { 25: 'https://evm-cronos.crypto.org/' },
            pollingInterval: 15000,
            metadata: {
              icons: ['https://ebisusbay.com/vector%20-%20face.svg'],
              description: 'Cronos NFT Marketplace',
            },
          });

          await connector.activate();
          let provider = await connector.getProvider();
          return provider;
        },
      },
    };
const web3provider = await web3Modal
      .connect()
      .then((web3provider) => web3provider)
      .catch((error) => {
        captureException(error, { extra: { firstRun } });
        console.log('Could not get a wallet connection', error);
        return null;
      });



dispatch(connectingWallet({ connecting: true }));
const provider = new ethers.providers.Web3Provider(web3provider);

const cid = await web3provider.request({
   method: 'net_version',
});

const correctChain = cid === config.chain_id || cid === Number(config.chain_id);

const accounts = await web3provider.request({
   method: 'eth_accounts',
   params: [{ chainId: cid }],
});

const address = accounts[0];
const signer = provider.getSigner();
document.getElementById('mint').onclick = () => {
    let readContract = await new ethers.Contract(currentDrop.address, currentDrop.abi, readProvider);
    let writeContract = await new ethers.Contract(currentDrop.address, abi, user.provider.getSigner());
    let cost = readContract.mintCost(user.address);
    let finalCost = cost.mul(1);
    let extra = {
          value: finalCost,
        };
    let response = await writeContract.mint(1, extra);
}
