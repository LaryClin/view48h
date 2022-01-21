import React, { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'
import Item from './Item'

const Z_INDEX = 1000;
const TOP_POSITION = 80;

const NotificationContainer = ({ notifications, onRemove }) => {
    return (
        <TransitionGroup>
            {notifications.map((notification, index) => {
                const zIndex = (Z_INDEX - index).toString();
                const top = TOP_POSITION + index * 24;

                return <Item key={index} title={notification.title} description={notification.description} />
            })}
        </TransitionGroup>
    );
};

export default NotificationContainer;