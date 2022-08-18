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
import { faHome, faWallet, faGlobe, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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

        <MDBRow className='header d-flex justify-content-between text-center' style={{ marginTop: '95px' }}>
          <MDBCol md='3' className='top1'>
          <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>January</SwiperSlide>
      <SwiperSlide>February</SwiperSlide>
      <SwiperSlide>March</SwiperSlide>
      <SwiperSlide>April</SwiperSlide>
    </Swiper>
          </MDBCol>
          <MDBCol md='5' className='top2'>
          <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Main Account</SwiperSlide>
      <SwiperSlide>Guest Account 1</SwiperSlide>
      <SwiperSlide>Guest Account 2</SwiperSlide>
      <SwiperSlide>Guest Account 3</SwiperSlide>
    </Swiper>
          </MDBCol>
          <MDBCol md='3' className='top3'>
            asdfsdfs
          </MDBCol>
        </MDBRow>

        <MDBRow className='test3 d-flex justify-content-evenly'>
          <MDBCol md='4'>
            <MDBCol className='TopLine'> asdasd</MDBCol>
            <MDBRow style={{ marginTop: '15px' }} className='test4 justify-content-between'>
              <MDBCol md='5 box' >
                3
              </MDBCol>
              <MDBCol md='5 box2'>
                4
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md='4 box4'>
            <MDBCol className='TopLine'> asdasd</MDBCol>
            <MDBRow style={{ marginTop: '15px' }} className='test4 justify-content-between'>
              <MDBCol md='5 box' >
                3
              </MDBCol>
              <MDBCol md='5 box2'>
                4
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol md='3 box5' >
            5
          </MDBCol>




          <MDBCol md='4' style={{ marginTop: '15px' }}>
            <MDBCol className='TopLine'> asdasd</MDBCol>
          </MDBCol>
          <MDBCol md='4 ' style={{ marginTop: '15px' }}>
            <MDBCol className='TopLine'> asdasd</MDBCol>
          </MDBCol>
          <MDBCol md='3 box5' style={{ marginTop: '15px' }} >
            6
          </MDBCol>
        </MDBRow>






      </Content>
    </Layout>
  </Layout>
);

export default App;