import React from 'react'
import { Div } from 'atomize'
import MintButton from './MintButton'

const MintContainer = () => {
    return (
        <Div d="flex" w="100%" justify="space-evenly" flexDir={{ xs: 'column', sm: 'row' }} m='1rem'>
            <Div d="flex" flexDir="row" align="center" justify="space-around">
                <MintButton bg="info500" hoverBg="info700" category="blue" />
            </Div>
        </Div>
    );
};

export default MintContainer;