import React from 'react'

import MintContainer from './components/MintContainer'
import { Div, Container, Text } from 'atomize'

const HeroSection = () => {
    return (
        <Div tag="section" m={{ t: { xs: '6rem', md: '10rem' } }} textColor="white">
            <Container d="flex" flexDir="column" align="center">
                <Text tag="h1" textWeight="500" textAlign="center" textSize="display2" m={{ b: '1rem' }}>
                    Ynov Baby foot
                </Text>

                <Text tag="h2" textWeight="400" maxW="36rem" textAlign="center" textSize="subheader" textColor="white" m={{ b: '3rem' }}>
                    Bet on the best Baby Team and win all the money !
                </Text>
            </Container>
        </Div>
    );
};

export default HeroSection;