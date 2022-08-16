import logo from './raw/logo.png';
import './landing.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import chart from './raw/Charts Section.png';
import Button from 'react-bootstrap/Button';
import metamask from './raw/metamask-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillTransfer, faChartSimple, faBitcoinSign, faBuildingColumns, faPersonBreastfeeding, faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons'
<link href="//db.onlinewebfonts.com/c/9dc59b82721662bb26b8afb510dc29c8?family=Arima+Madurai" rel="stylesheet" type="text/css" />


function App() {
  return (
    
    <div className='body'>

      {/* Navbar  Start*/}
      <Navbar bg="" expand="lg" className='fixed-top bg-light'>
        <Container fluid>
          <Navbar.Brand href="#Home">
            <img className='img-fluid'
              src={logo}
              alt='HeaderImage'></img>
            <span className='hName'>INHERITIUM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action2">Services</Nav.Link>
              <Nav.Link href="#action2">News</Nav.Link>
              <Nav.Link href="#action2">Teams</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">

              <Button variant="outline-success" className='navbarBtn'><img src={metamask} className="img-fluid w-75" alt="" /></Button>
              <div className='mText d-flex align-items-center'>Connect With Metamask</div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar End */}
      {/* Mini Title Start */}
      <div className='container-fluid d-flex justify-content-center' style={{ marginTop: '150px' }}>
        <div className='justify-content-center' style={{ fontSize: '1.4em' }}>
          Blockchain investment app for financier
        </div>
      </div>
      {/* Mini Title End */}

      {/* Main Section Start */}
      <div className='container-fluid d-flex justify-content-center'>
        <div className='col-4 col-md-4'>
          <img className='w-100 h-100'
            src={chart}
            alt="" />
        </div>
        <div className='col-3 col-md-3 d-flex align-self-center flex-column'>
          <div className='container-fluid  roboto'>
            <h3 style={{ color: 'blue' }}>Manage your <br /> finances like a pro <br /> in no time</h3>
          </div>
          <div className='container-fluid'>
            <p style={{ color: 'black', fontWeight: 'bold' }}>With the application, information such as seeing the summary of your account status, viewing the last transaction and financial analysis will be with you. You will be able to safely track your investment and pass it on to future generations</p>
          </div>
        </div>
      </div>

      {/* Main Section End */}
      {/* Who are we Section Start */}
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-8">
          <h1 style={{ color: 'blue' }}>Who are <span style={{ color: 'purple' }}>we ?</span></h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-6">
          <p style={{ color: 'white', fontWeight: 'bold' }}> Inheritium is a revolutionary creation created to help you manage your money, save money and leave a legacy for future generations. If you want to leave a wonderful legacy to your children, we are here for you.
          </p>
        </div>
      </div>
      {/* Who are we Section End */}
      {/* Services Section Start */}
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-12" style={{ marginTop: '75px' }}>
          <h1 style={{ color: 'blue' }}>Our Services</h1>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faMoneyBillTransfer} /></h5>
              <h6 class="card-title mb-2 ">Transfer</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faHandHoldingDollar} /></h5>
              <h6 class="card-title mb-2 ">Withdraws</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faBitcoinSign} /></h5>
              <h6 class="card-title mb-2 ">Purchase</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center text-center container-fluid">
        <div class="col-12" style={{ marginTop: '75px' }}>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faPersonBreastfeeding} /></h5>
              <h6 class="card-title mb-2 ">Inheritance Transactions</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faBuildingColumns} /></h5>
              <h6 class="card-title mb-2 ">Bank Statement</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style={{ width: '18rem;' }}>
            <div class="card-body">
              <h5 class="card-title fa-3x"><FontAwesomeIcon className='ServicesIcon' icon={faChartSimple} /></h5>
              <h6 class="card-title mb-2 ">Instantaneous Financial Analyses</h6>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat, odio sed elementum porttitor, lectus lacus consectetur purus, eget eleifend lacus turpis a lorem.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section End */}
      {/* News Section Start */}
      <div class="row justify-content-center text-center container-fluid" style={{ marginTop:'75px' }}>
        <div class="col-8">
          <h1 style={{ color: 'blue' }}>Agenda & News</h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-6">
          <p style={{ color: 'white', fontWeight: 'bold' }}> Inheritium is a revolutionary creation created to help you manage your money, save money and leave a legacy for future generations. If you want to leave a wonderful legacy to your children, we are here for you.
          </p>
        </div>
      </div>
      {/* News Section End */}

    </div>
  );
}

export default App;

