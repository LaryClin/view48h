import React, { createContext, useCallback, useState } from 'react'

export const NotificationsContext = createContext(undefined);

export const NotificationsProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const notification = useCallback(({ title, description, type }) => {
        setNotifications((prevNotifications) => {
            const id = title;
            const currentNotifications = prevNotifications.filter((prevNotification) => prevNotification.id !== id);

            return [
                {
                    id,
                    title,
                    description,
                    type
                },
                ...currentNotifications
            ]
        });
    }, [setNotifications]);

    const notificationError = (title, description) => {
        return notification({ title, description, type: 'error' });
    };

    const notificationInfo = (title, description) => {
        return notification({ title, description, type: 'info' });
    };

    const notificationSuccess = (title, description) => {
        return notification({ title, description, type: 'success' });
    };

    const notificationWarning = (title, description) => {
        return notification({ title, description, type: 'warning' });
    };

    const clear = () => setNotifications([]);
    const remove = (id) => {
        setNotifications((prevNotifications) => prevNotifications.filter((prevNotification) => prevNotification.id !== id));
    };

    return <NotificationsContext.Provider value={{ notifications, clear, remove, notificationError, notificationInfo, notificationSuccess, notificationWarning }}>
        {children}
    </NotificationsContext.Provider>
};