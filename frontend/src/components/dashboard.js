import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
import logo from './raw/logoveyazi.png';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faWallet,faGlobe,faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  <Layout hasSider>
    <Sider className='menu'
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu className='menu' defaultSelectedKeys={['4']}> 
        <img className='img-fluid test' src={logo} alt='HeaderImage'></img>
        <Menu.Item className='item'>
          <FontAwesomeIcon className='ServiceIcon' icon={faHome}/> Dashboard
          </Menu.Item>
          <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon fa-light' icon={faWallet}/> My Wallet
          </Menu.Item> 
          <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon' icon={faGlobe}/> Transactions
          </Menu.Item>
          <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon' icon={faArrowRightFromBracket}/> Signout
          </Menu.Item> 
      </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    > 
      <Content className = 'body'
        style={{
         
          overflow: 'initial',
        }}
      >
      </Content>
    </Layout>
  </Layout>
);

export default App;