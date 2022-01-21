import React, { useContext } from 'react'
import { Web3Context } from 'state'
import { Button } from 'atomize'
import { formatAddress } from 'utils/format'

const WalletButton = () => {
    const { account } = useContext(Web3Context);

    return (
        <Button
            d="flex"
            bg="info700"
            hoverBg="info600"
            textColor="white"
        >
            {formatAddress(account)}
        </Button>
    )
};

export default WalletButton;
