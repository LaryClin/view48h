import { ethers } from 'ethers'
import getNodeUrl from './getNodeUrl'

const POLLING_INTERVAL = 12000;
const nodeUrl = getNodeUrl();
const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);

export const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;

    return library;
};

export const eagerConnect = async () => {
    const { ethereum } = window;

    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        return accounts[0];
    } catch (err) {
        console.error(err);
    }
};

export const connect = async () => {
    const { ethereum } = window;

    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
    } catch (err) {
        console.error(err);
    }
};