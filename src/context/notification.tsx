import { notification } from 'antd';
import { NotificationInstance } from 'antd/es/notification/interface';
import React, { useContext } from 'react';

export const NotificationContext =
  React.createContext<NotificationInstance | null>(null);

interface INotificationProviderProps {
  children: React.ReactNode;
}

const NotificationProvider = ({ children }: INotificationProviderProps) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationContext.Provider value={api}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export default NotificationProvider;
