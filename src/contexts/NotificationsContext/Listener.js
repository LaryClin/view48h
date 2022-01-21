import React from 'react'
import NotificationContainer from 'components/NotificationContainer'
import useNotification from 'hooks/useNotification'

const NotificationListener = () => {
    const { notifications, remove } = useNotification();

    const handleRemove = (id) => remove(id);

    return <NotificationContainer notifications={notifications} onRemove={handleRemove} />
};

export default NotificationListener;