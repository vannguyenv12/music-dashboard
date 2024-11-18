import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const headerItems = [
  {
    key: '1',
    label: 'Home',
  },
  {
    key: '2',
    label: 'Logout',
  },
];

const items1: MenuProps['items'] = headerItems.map((item) => ({
  key: item.key,
  label: item.label,
}));

const routes = [
  {
    key: '1',
    icon: null,
    label: 'Song',
    children: [
      {
        key: '/manage-song',
        label: 'Manage Song',
      },
      {
        key: '/upload',
        label: 'Upload Song',
      },
    ],
  },
  {
    key: '2',
    icon: null,
    label: 'Artist',
  },
  {
    key: '3',
    icon: null,
    label: 'Album',
  },
];

const items2: MenuProps['items'] = routes.map((route) => {
  return {
    key: route.key,
    icon: route.icon,
    label: route.label,

    children: route?.children?.map((item) => {
      return {
        key: item.key,
        label: item.label,
      };
    }),
  };
});

const RootLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  //   React State
  const [selectedChildrenKeys, setSelectedChildrenKeys] = useState<string[]>(
    []
  );
  const [selectedParentsKeys, setSelectedParentKeys] = useState<string[]>([]);

  //   React router dom
  const location = useLocation();

  useEffect(() => {
    const parent = routes.find((route) =>
      route?.children?.some((item) => item.key === location.pathname)
    );

    if (parent) {
      const parentKey = parent.key;
      setSelectedParentKeys([parentKey]);
    }

    setSelectedChildrenKeys([location.pathname]);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  };

  const handleHeaderMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '2') {
      localStorage.removeItem('accessToken');
      navigate('/sign-in');
    }
  };

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className='demo-logo' />
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
          onClick={handleHeaderMenuClick}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
            onClick={handleMenuClick}
            selectedKeys={selectedChildrenKeys} // children
            openKeys={selectedParentsKeys} // parent
            onOpenChange={(openKeys) => setSelectedParentKeys(openKeys)}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '100vh',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
