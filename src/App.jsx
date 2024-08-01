import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search/Search';
import MostPopularProducts from './components/MostPopularProducts/MostPopularProducts';
import PromoteUser from './components/PromoteUser/PromoteUser';
import { Layout, Menu } from 'antd';
import ErrorBoundary from './components/ErrorBoundary';

const { Header, Content, Sider } = Layout;

const App = () => {
  const headerMenuItems = [
    { label: <a href="/">Home</a>, key: '1' },
    { label: <a href="/promote">Promote User</a>, key: '2' },
  ];

  const siderMenuItems = [
    { label: <a href="/">Dashboard</a>, key: '1' },
    { label: <a href="/promote">Admin</a>, key: '2' },
  ];

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={headerMenuItems} />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu mode="inline" defaultSelectedKeys={['1']} items={siderMenuItems} style={{ height: '100%', borderRight: 0 }} />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<><Search /><MostPopularProducts /></>} />
                    <Route path="/promote" element={<PromoteUser />} />
                  </Routes>
                </ErrorBoundary>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
