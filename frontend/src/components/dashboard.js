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
import { faHome, faWallet, faGlobe, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon className='ServiceIcon' icon={faHome} /> Dashboard
        </Menu.Item>
        <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon fa-light' icon={faWallet} /> My Wallet
        </Menu.Item>
        <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon' icon={faGlobe} /> Transactions
        </Menu.Item>
        <Menu.Item className='item' >
          <FontAwesomeIcon className='ServiceIcon' icon={faArrowRightFromBracket} /> Signout
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Content className='body'>

        <div className='container-fluid d-flex justify-content-center' style={{ marginTop: '150px' }}>
          <div className='container-fluid d-flex col-8 col-md-8'>
            <div className='col-6 col-md-6 box'>
              1
            </div>
            <div className='col-6 col-md-6 box2'>
              2
            </div>
          </div>
          <div className='container-fluid d-flex col-4 col-md-4'>
              <div className='box3'>
                123
              </div>
          </div>
        </div>
        <div className='container-fluid d-flex justify-content-center' style={{ marginTop: '10px' }}>
          <div className='container-fluid d-flex col-8 col-md-8'>
            <div className='col-6 col-md-6 box'>
              1
            </div>
            <div className='col-6 col-md-6 box2'>
              2
            </div>
          </div>
          <div className='container-fluid d-flex col-4 col-md-4'>
              <div className='box3'>
                123
              </div>
          </div>
        </div>




      </Content>
    </Layout>
  </Layout>
);

export default App;