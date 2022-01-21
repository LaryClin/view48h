import { useContext } from 'react'
import { NotificationsContext } from 'contexts/NotificationsContext'

const useNotification = () => {
    const notificationContext = useContext(NotificationsContext);

    if (notificationContext === undefined) {
        throw new Error('Notifications context undefined');
    }

    return notificationContext;
};

export default useNotification;