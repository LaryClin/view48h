import React, { useContext, useState } from 'react'
import useNotification from 'hooks/useNotification'
import { Web3Context } from 'state'
import { Button, Icon } from 'atomize'
import { connect } from 'utils/web3'

const ConnectButton = () => {
    const { account, setAccount } = useContext(Web3Context);
    const [isLoading, setIsLoading] = useState(false);
    const { notificationSuccess } = useNotification();

    const connectWallet = async () => {
        if (!account) {
            setIsLoading(true);

            const address = await connect();
            setAccount(address);

            setIsLoading(false);
            notificationSuccess('Connection success', 'Connection established with the application.');
        }
    };

    return (
        <Button
            d="flex"
            bg="info700"
            hoverBg="info600"
            prefix={!isLoading && <Icon name="Link" size="20px" m={{ r: '.3rem' }} color="white" />}
            onClick={async () => { await connectWallet(); }}
            isLoading={isLoading}
            disabled={isLoading}
        >
            Connect Wallet
        </Button>
    );
};

export default ConnectButton;