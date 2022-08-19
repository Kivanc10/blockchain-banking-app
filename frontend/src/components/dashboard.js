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
import intertech from './raw/intertechLogo.png';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faGlobe, faDollarSign, faArrowRightFromBracket, faCirclePlus, faBell, faMoneyBillWave, faCreditCard, faArrowTrendUp, faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import * as V from 'victory';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryPie, VictoryBar }
  from 'victory';
const { Header, Content, Footer, Sider } = Layout;
const dataBar = [
  { x: "Jan", y: 2, y0: 1 },
  { x: "Feb", y: 5, y0: 1 },
  { x: "Mar", y: 5, y0: 1 },
  { x: "Apr", y: 3, y0: 1 },
  { x: "May", y: 2, y0: 1 },
  { x: "Jun", y: 5, y0: 1 },
  { x: "Jul", y: 5, y0: 1 },
  { x: "Aug", y: 3, y0: 1 },
  { x: "Sep", y: 2, y0: 1 },
  { x: "Oct", y: 5, y0: 1 },
  { x: "Nov", y: 5, y0: 1 },
  { x: "Dec", y: 3, y0: 1 },

];

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
        <img className='rounded mx-auto d-block test' src={logo} alt='HeaderImage'></img>
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
        <img className='rounded mx-auto d-block fixed-bottom intertech2' src={intertech} alt='HeaderImage'></img>
      </Menu>
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Content className='body'>

        <MDBRow className='header d-flex justify-content-between text-center align-items-center' style={{ marginTop: '25px' }}>
          <MDBCol md='3' className='top1 align-items-center'>
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><button type="button" className="btn btn-primary months">January</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">February</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">March</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary months">April</button></SwiperSlide>
            </Swiper>
          </MDBCol>
          <MDBCol md='5' className='top2'>
            <Swiper
              spaceBetween={1}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><button type="button" className="btn btn-primary account">Main Account</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary account">Inheritor</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary account">Inheritor</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary account">Inheritor</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary account">Inheritor</button></SwiperSlide>
              <SwiperSlide><button type="button" className="btn btn-primary account">Inheritor</button></SwiperSlide>
            </Swiper>
          </MDBCol>
          <MDBCol md='3' className='d-flex justify-content-evenly text-center top3'>
            <button type="account" className="btn btn-primary buttons">
              <FontAwesomeIcon className='ServiceIcon fa-2x' icon={faCirclePlus} />
              <div>
                Create New Account
              </div>
            </button>
            <button type="notifications" className="btn btn-primary buttons">
              <FontAwesomeIcon className='ServiceIcon fa-2x' icon={faBell} />
              <div>
                Notifications
              </div>
            </button>
          </MDBCol>
        </MDBRow>

        <MDBRow className='test3 d-flex justify-content-evenly'>

          <MDBCol md='4'>
            <MDBCol className='TopLine boxShadow'>
              <MDBRow className='d-flex justify-content-evenly'>
                <MDBCol md='8'>
                  <div className='d-flex justify-content-evenly mb-3 font3' style={{ marginTop: '30px' }}>
                    My Wallet Summary
                  </div>
                  <div className='d-flex justify-content-evenly mb-3 font2'>
                    Total Balance
                  </div>
                  <div className='d-flex justify-content-evenly mb-1 font1'>
                    +$2008,55
                  </div>
                  <div className='d-flex justify-content-evenly mb-4'>
                    Last Transaction
                  </div>

                  <div className='d-flex justify-content-evenly'>
                    <button type="button" className="btn btn-primary wallet">
                      Withdraw
                    </button>
                    <button type="button" className="btn btn-primary wallet">
                      Top up
                    </button>
                  </div>
                </MDBCol>
                <MDBCol md='4'>
                  <div className='mb-3 font4' style={{ marginTop: '90px' }}>
                    <p>
                      $273.58
                    </p>
                  </div>
                  <div className='font5'>
                    Wallets Amount
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>






            <MDBRow style={{ marginTop: '15px' }} className='test4 justify-content-between'>
              <MDBCol md='5 box' className='justify-content-center p-4 boxShadow'>


                <div className='box-title' style={{ paddingTop: '0.8em' }} >
                  Total Income
                </div>
                <div className='box-subtitle '>
                  $ 18531.31
                </div>
                <div className='greenBox text-center'
                  style={{ width: '6.5em' }}>
                  <FontAwesomeIcon className='faArrowTrendUp greenBoxYazilar' icon={faArrowTrendUp} />
                  <label className='greenBoxYazilar' style={{ paddingLeft: '5px' }}> +11%</label>
                </div>

              </MDBCol>
              <MDBCol md='5 box2' className='justify-content-center p-4 boxShadow'>

                <div className='box-title' style={{ paddingTop: '0.8em' }} >
                  Total Saves
                </div>
                <div className='box-subtitle '>
                  $ 137.43
                </div>
                <div className='redBox text-center'
                  style={{ width: '6.5em' }}>
                  <FontAwesomeIcon className='faArrowTrendDown redBoxYazilar' icon={faArrowTrendDown} />
                  <label className='redBoxYazilar' style={{ paddingLeft: '5px' }}> -8%</label>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCol>


          <MDBCol md='4 box4 '>
            <MDBCol className='boxes boxShadow'>
              <VictoryChart className='chart'
                width={600}
                theme={VictoryTheme.material}
                domainPadding={10}
              >
                <VictoryBar className='chart'

                  style={{ data: { fill: "blue" } }}
                  data={dataBar}
                />
              </VictoryChart>

            </MDBCol>
            <MDBRow style={{ marginTop: '15px' }} className='test4 justify-content-between'>
              <MDBCol md='5 box' className='justify-content-center p-4 boxShadow'>

                <div className='box-title' style={{ paddingTop: '0.8em' }} >
                  Input
                </div>
                <div className='box-subtitle '>
                  $ 5000.00
                </div>
                <div className='greenBox text-center'
                  style={{ width: '6.5em' }}>
                  <FontAwesomeIcon className='faArrowTrendUp greenBoxYazilar' icon={faArrowTrendUp} />
                  <label className='greenBoxYazilar' style={{ paddingLeft: '5px' }}> +8%</label>
                </div>

              </MDBCol>
              <MDBCol md='5 box2' className='justify-content-center p-4 boxShadow'>

                <div className='box-title' style={{ paddingTop: '0.8em' }} >
                  Output
                </div>
                <div className='box-subtitle '>
                  $ 201.48
                </div>
                <div className='redBox text-center'
                  style={{ width: '6.5em' }}>
                  <FontAwesomeIcon className='faArrowTrendDown redBoxYazilar' icon={faArrowTrendDown} />
                  <label className='redBoxYazilar' style={{ paddingLeft: '5px' }}> -3%</label>
                </div>

              </MDBCol>
            </MDBRow>
          </MDBCol>


          <MDBCol md='3 box5 boxShadow' >
            5
          </MDBCol>

          <MDBCol md='4' className='d-flex justify-content-evenly' style={{ marginTop: '15px' }}>
            <MDBCol className='boxes boxShadow'>
              <div className='font2 mb-4' style={{ marginTop: '15px', marginLeft: '20px' }}>
                Latest Transactions
              </div>
              <MDBRow className='d-flex justify-content-evenly'>
                <MDBCol md='8'>
                  <div className='mb-3 trans'>
                    <FontAwesomeIcon className='ServiceIcon' icon={faCreditCard} /> Personal Payment
                  </div>
                  <div className='mb-3 trans'>
                    <FontAwesomeIcon className='ServiceIcon purchase' icon={faMoneyBillWave} /> Purchasing
                  </div>
                  <div className='mb-3 trans'>
                    <FontAwesomeIcon className='ServiceIcon' icon={faCreditCard} /> Personal Payment
                  </div>
                  <div className='mb-3 trans'>
                    <FontAwesomeIcon className='ServiceIcon sell' icon={faMoneyBillWave} /> Selling
                  </div>
                  <div className='mb-3 trans'>
                    <FontAwesomeIcon className='ServiceIcon' icon={faCreditCard} /> Personal Payment
                  </div>
                </MDBCol>
                <MDBCol md='4'>
                  <div className='mb-3 transEnd' style={{ color: 'red' }}>
                    -$35
                  </div>
                  <div className='mb-3 transEnd' style={{ color: 'red' }}>
                    -$128
                  </div>
                  <div className='mb-3 transEnd' style={{ color: 'green' }}>
                    +$10
                  </div>
                  <div className='mb-3 transEnd' style={{ color: 'green' }}>
                    +$35
                  </div>
                  <div className='mb-3 transEnd' style={{ color: 'red' }}>
                    -$35
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>
          <MDBCol md='4 ' style={{ marginTop: '15px' }}>
            <MDBCol className='boxes boxShadow'>
            </MDBCol>
          </MDBCol>
          <MDBCol md='3 box5 boxShadow' style={{ marginTop: '15px' }} >
            6
          </MDBCol>
        </MDBRow>

      </Content>
    </Layout>
  </Layout>
);

export default App;