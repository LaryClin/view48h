import React from 'react'
import { Div, Container, Image } from 'atomize'

import Links from './Links'

const Header = ({ children }) => {
    return (
        <>
            <Div tag="header"
                 p={{ y: { xs: '1.5rem', md: '1rem' } }}
                 pos="fixed"
                 top="0"
                 left="0"
                 right="0"
                 zIndex="100"
                 bg="rgba(52, 31, 151, 0.95)"
                 shadow="2"
                 textColor="white"
                 transition
            >
                <Container d="flex" align="center" justify="space-between">
                    <Div cursor="pointer">
                        <Image src="aa.jpg" alt="Baby crypto logo" w="auto" />
                    </Div>

                    <Links />
                </Container>
            </Div>
            {children}
        </>
    );
};

export default Header;