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

// Global notification
let globalNotification: ICustomNotification | null = null;

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

  globalNotification = customNotification;

  return (
    <NotificationContext.Provider value={customNotification}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);

  if (!context) throw new Error('Context not found');

  return context;
};

// Global notify function
export const globalNotify = {
  success: (message: string) => globalNotification?.success(message),
  error: (message: string) => globalNotification?.error(message),
};

export default NotificationProvider;
