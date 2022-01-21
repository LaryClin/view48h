import React, { useState } from 'react'
import { Div, Container, Row } from 'atomize'

import GameItem from './GameItem'
import MintButton from "./MintButton";

const columns = [
    {
        title: 'Game 1',
        team1: 'Les Peakys',
        team2: 'Les Blinders'
    }
];

const GameSection = () => {
    return (
        <Div tag="section" m={{ t: { xs: '6rem', md: '10rem' } }} textColor="white">
            <Container p={{ b: '5rem' }}>
                <Row d="flex" justify="center">
                    {columns.map((column, index) => <GameItem data={column} key={index} />)}
                </Row>
            </Container>
        </Div>
    );
};

export default GameSection;