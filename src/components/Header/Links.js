import React, { useState, useContext } from 'react'
import { Web3Context } from 'state'
import { NavLink } from 'react-router-dom'
import { Div, Text } from 'atomize'

import ConnectButton from 'components/ConnectButton'
import WalletButton from 'components/WalletButton'

const AnchorLink = ({ to, text }) => {
    return <Text
            m={{ r: '2rem', b: { xs: '1rem', md: 0 } }}
            textWeight="500"
            textColor="medium"
            hoverTextColor="black"
            transition
        >
            <NavLink to={to}>{text}</NavLink>
        </Text>
};

const Links = () => {
    const { account } = useContext(Web3Context);
    const [showMobileHeaderMenu, setShowMobileHeaderMenu] = useState(false);

    return (
        <>
            {/* mobile links */}
            <Div d={{ xs: "flex", md: "none" }} flexDir="column" onClick={() => setShowMobileHeaderMenu(!showMobileHeaderMenu)}>
                <Div h="2px" w="1rem" bg="black" rounded="lg" transition style={{
                    transform: `translateY(${showMobileHeaderMenu ? '1' : '-2'}px) rotate(${showMobileHeaderMenu ? '135' : '0'}deg)`
                }} />
                <Div h="2px" w="1rem" bg="black" rounded="lg" transition style={{
                    transform: `translateY(${showMobileHeaderMenu ? '-1' : '2'}px) rotate(${showMobileHeaderMenu ? '45' : '0'}deg)`
                }} />
            </Div>

            {/* desktop links */}
            <Div d="flex"
                 bg={{ xs: 'white', md: 'transparent' }}
                 align={{ xs: 'stretch', md: 'center' }}
                 flexDir={{ xs: 'column', md: 'row' }}
                 pos={{ xs: 'absolute', md: 'static' }}
                 p={{
                     t: { xs: "6rem", md: "0" },
                     b: { xs: "2rem", md: "0" },
                     x: { xs: "1.5rem", md: "0" },
                 }}
                 top="0"
                 left="0"
                 right="0"
                 zIndex={{ xs: "-1", md: "0" }}
                 shadow={{ xs: "4", md: "0" }}
                 opacity={{
                     xs: showMobileHeaderMenu ? "1" : "0",
                     md: "1",
                 }}
                 transform={{
                     xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
                     md: "none",
                 }}
                 textColor="white"
                 transition
            >

                {account ? <WalletButton /> : <ConnectButton />}
            </Div>
        </>
    );
};

export default Links;