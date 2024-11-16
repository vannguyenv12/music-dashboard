import { notification } from 'antd';
import React, { useContext } from 'react';

interface ICustomNotification {
  success: (message: string) => void;
  error: (message: string) => void;
}

export const NotificationContext =
  React.createContext<ICustomNotification | null>(null);

interface INotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider = ({ children }: INotificationProviderProps) => {
  const [api, contextHolder] = notification.useNotification();

  const customNotification = {
    success(message: string) {
      return api.success({ message });
    },
    error(message: string) {
      return api.error({ message });
    },
  };

  return (
    <NotificationContext.Provider value={customNotification}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;
