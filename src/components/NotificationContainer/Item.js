import React, { useState } from 'react'
import { Notification, Icon, Text } from 'atomize'

const Item = ({ title, description }) => {
    const [showNotification, setShowNotification] = useState(true);

    return (
        <Notification
            bg="success700"
            prefix={
                <Icon name="Success" color="white" size="20px" m={{ r: '.5rem' }} />
            }
            isOpen={showNotification}
            onClose={() => setShowNotification(false)}
        >
            <Text textWeight="700">{title}</Text>
            <Text>{description}</Text>
        </Notification>
    );
};

export default Item;