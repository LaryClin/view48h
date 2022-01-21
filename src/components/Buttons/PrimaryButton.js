import React from 'react'
import { Button } from 'atomize'

const DEFAULT_BG = 'info700';
const DEFAULT_HOVER_BG = 'info600';
const DEFAULT_HEIGHT = '3rem';

const PrimaryButton = ({ bg, hoverBg, h, text, ...props }) => {
    return (
        <Button
            bg={bg ? bg : DEFAULT_BG}
            hoverBg={hoverBg ? hoverBg : DEFAULT_HOVER_BG}
            h={h ? h : DEFAULT_HEIGHT}
            {...props}
        >
            {text}
        </Button>
    );
};

export default PrimaryButton;