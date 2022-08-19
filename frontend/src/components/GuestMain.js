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
  import Container from 'react-bootstrap/Container';
  import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import Carousel from 'react-bootstrap/Carousel';
  import React from 'react';
  import logo from './raw/logoveyazi.png';
  import './dashboard.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faHome, faWallet, faGlobe, faArrowRightFromBracket,faUser } from '@fortawesome/free-solid-svg-icons';
  import 'swiper/css';
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
        
        <div className='container-fluid d-flex justify-content-end header'>
            <FontAwesomeIcon className='ServiceIcon fa-2x' icon={faUser}/>
        </div>
  
  
  
  
  
        </Content>
      </Layout>
    </Layout>
  );
  
  export default App;