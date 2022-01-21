import React, { useState } from 'react'
import { Button, Icon } from 'atomize'
import PrimaryButton from 'components/Buttons/PrimaryButton'

const MintButton = ({category, data}) => {
    const colors = {
        blue: { bg: 'info700', hoverBg: 'info600'}
    };

    return (
        <>
            <PrimaryButton
                //text={data.team1}
                bg={colors[category].bg}
                hoverBg={colors[category].hoverBg}
                w={{ xs: '100%', sm: '10rem' }}
                m={{ b: { xs: '1rem', sm: 0 } }}
                textColor="white"
            />
        </>
    );
};

export default MintButton;