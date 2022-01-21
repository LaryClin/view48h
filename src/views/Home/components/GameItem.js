import React from 'react'
import { Col, Div, Text } from 'atomize'
import PrimaryButton from "../../../components/Buttons/PrimaryButton";

const GameItem = ({ data }) => {
    const colors = {
        bg: 'info700',
        hoverBg: 'info600'
    };

    return (
        <Col size={{ xs: 12, sm: 6, lg: 3 }} d="flex" justify="center" align="center">
            <Div
                border="1px solid"
                borderColor="gray200"
                h="100%"
                d="flex"
                flexDir="column"
                p="2rem"
                shadow="3"
                rounded="xl"
                justify="center"
                textColor="white"
            >
                <Text textSize="title" textWeight="500" m={{ b: '1rem' }}>{data.title}</Text>
                <Text textSize="subheader" textColor="white" m={{ b: '1rem' }}>{data.team1} contre {data.team2}</Text>
                <Col d="flex" justify="space-between">
                    <Div d="flex" w="100%" justify="space-evenly" flexDir={{ xs: 'column', sm: 'row' }} m='1rem'>
                        <Div d="flex" flexDir="row" align="center" justify="space-around">
                            <PrimaryButton
                                text={"Miser 10 sur " +data.team1}
                                bg={colors.bg}
                                hoverBg={colors.hoverBg}
                                w={{ xs: '100%', sm: '10rem' }}
                                m={{ b: { xs: '1rem', sm: 0 } }}
                                textColor="white"
                            />
                        </Div>
                    </Div>
                    <Div d="flex" w="100%" justify="space-evenly" flexDir={{ xs: 'column', sm: 'row' }} m='1rem'>
                        <Div d="flex" flexDir="row" align="center" justify="space-around">
                            <PrimaryButton
                                text={"Miser 10 sur " + data.team2}
                                bg={colors.bg}
                                hoverBg={colors.hoverBg}
                                w={{ xs: '100%', sm: '10rem' }}
                                m={{ b: { xs: '1rem', sm: 0 } }}
                                textColor="white"
                            />
                        </Div>
                    </Div>
                </Col>
            </Div>
        </Col>
    );
};

export default GameItem;