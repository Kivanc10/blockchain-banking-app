import logo from './raw/logo.png';
import './landing.css';
import icerik1 from './raw/1.jpeg';
import icerik2 from './raw/2.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import chart from './raw/Charts Section.png';
import Button from 'react-bootstrap/Button';
import metamask from './raw/metamask-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AbdullahK from './raw/AbdullahKusgulu.png';
import ArdaS from './raw/ArdaSonmezler.png';
import aysenB from './raw/aysenBakis.png';
import BerkayT from './raw/BerkayTugut.png';
import GizemZ from './raw/GizemZorba.png';
import HuseyinO from './raw/HuseyinOzkale.png';
import KaanK from './raw/kaanKaftanoglu.png';
import KivancK from './raw/KvancAydogmus.png';
import MusaM from './raw/MusaMeric.png';
import senaN from './raw/senanur.png';
import SimgeB from './raw/simgeBatur.png';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import SinejanY from './raw/sinejanYildirim.png';
import { faMoneyBillTransfer, faChartSimple, faBitcoinSign, faBuildingColumns, faPersonBreastfeeding, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
<link href="//db.onlinewebfonts.com/c/9dc59b82721662bb26b8afb510dc29c8?family=Arima+Madurai" rel="stylesheet" type="text/css" />

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
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
      <div className='container-fluid d-flex justify-content-center' style={{ marginTop: '6em' }}>
        <div className='justify-content-center' style={{ fontSize: '1.4em', marginTop:'2em'}}>
          Blockchain investment app for financier
        </div>
      </div>
      {/* Mini Title End */}

      {/* Main Section Start */}
      <div className='container-fluid d-flex justify-content-center' style={{marginTop: '2em'}}>
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
      <div class="row justify-content-center text-center container-fluid" style={{ marginTop: '75px' }}>
        <div class="col-8">
          <h1 style={{ color: 'blue' }}>Agenda & News</h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid" style={{ marginTop: '15px' }}>
        <div class="col-12">
          <Carousel responsive={responsive}>
            <div>

              <img className='img-fluid newsP'
                src={icerik1}
                alt='icerik'></img>

            </div>
            <div>

              <img className='img-fluid newsP'
                src={icerik2}
                alt='icerik'></img>

            </div>
            <div>

              <img className='img-fluid newsP'
                src={icerik1}
                alt='icerik'></img>

            </div>
            <div>

              <img className='img-fluid newsP'
                src={icerik2}
                alt='icerik'></img>

            </div>
          </Carousel>
        </div>
      </div>
      {/* News Section End */}
      {/* Teams Section Start */}
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-12" style={{ marginTop: '75px' }}>
          <h1 style={{ color: 'blue' }}>Our Teams</h1>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={senaN}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Senanur Katipoğlu</h6>
              <p class="card-text">Mentor</p>
              <p class="card-text">Product Owner</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder " style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={SimgeB}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Simge Batur</h6>
              <p class="card-text">Business Analysis</p>
              <p class="card-text">Scrum Master</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={aysenB}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Ayşen Bakış</h6>
              <p class="card-text">Mentor</p>
              <p class="card-text">Agile Coach</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={ArdaS}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Arda Sönmezler</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
      </div>
    
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-12" style={{ marginTop: '25px' }}>
         
        </div>
     
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={KaanK}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Kaan Kaftanoğlu</h6>
              <p class="card-text">Business Analysis</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={aysenB}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Sinejan Yıldırım</h6>
              <p class="card-text">Business Analysis</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={KivancK}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Kıvanç Aydoğmuş</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={GizemZ}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Gizem Zorba</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row justify-content-center align-self-center text-center container-fluid">
        <div class="col-12 " style={{ marginTop: '25px' }}>
         
        </div>
        <div class="col-2 ">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={BerkayT}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Berkay Tuğut</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={AbdullahK}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Abdullah Küsgülü</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={HuseyinO}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader">Hüseyin Özkale</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
        <div class="col-2 ">
          <div class="card TeamsBorder" style={{ width: '18rem;' }}>
          <img className='card-img-top'
                src={MusaM}
                alt='icerik'></img>
            <div class="card-body">
              <h6 class="card-title mb-2 teamsHeader ">Musa Meriç</h6>
              <p class="card-text">Software Developer</p>
              <p class="card-text">Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* Teams Section End */}

      {/*FAQ Section Start */}
      <div class="row justify-content-center text-center container-fluid" style={{marginTop:'75px'}}>
        <div class="col-8">
          <h1 style={{ color: 'purple' }}>Frequently <span style={{ color: 'blue' }}>asked question</span></h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-6">
          <p style={{ color: 'white', fontWeight: 'bold' }}>If you are not sure whether Draft is suitalbe for you or
not, do not worry. We are here to explain everything you
might want to know</p>
        </div>
      </div>
      <div className='row justify-content-center text-center container-fluid'>
        <div className='col-6 text-center'>
      <Accordion className='accordion'>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading className='accordion-header'>
                    <AccordionItemButton className='accordion-button'>
                    What is the difference between INHERITIUM and a Bank account ? 
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion-body'>
                    <p>
                    you can easily invest your accumulation via Inheritium
on the contrary your bank account 
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading className='accordion-header'>
                    <AccordionItemButton className='accordion-button'>
                    Who can open INHERITIUM account ?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion-body'>
                    <p>
                    Anyone who is over the age of 18 and has no problems with legal processes can open an account in our system.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading className='accordion-header'>
                    <AccordionItemButton className='accordion-button'>
                        
Can my children transact through their accounts?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion-body'>
                    <p>
                    Children will not be able to perform transactions until they reach the legal age limit. The legal age has been determined as 18.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading className='accordion-header'>
                    <AccordionItemButton className='accordion-button'>
                    Can I cancel my subscription or switch to another account anytime?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion-body'>
                    <p>
                    Our system has been designed to allow this easily.
 You can cancel your subscription or switch to your 
another Inheritium account.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className='accordion-item'>
                <AccordionItemHeading className='accordion-header'>
                    <AccordionItemButton className='accordion-button'>
                    What happens if I invest less than X coins?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion-body'>
                    <p>
The minimum order amount is set as 10 TRY by our system.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </div>
      {/*FAQ Section End */}
      <div class="container-fluid bg-light">
  <footer class="row row-cols-5 py-5 my-5 border-top">
    <div class="col-8 text-center">
      <h6>Contact :</h6>
      <p>
        Sanayi Mahallesi, Teknopark Bulvarı 1/3C, Kurtköy, 34906 Pendik/Istanbul
      </p>
      <p>Tel:+90 216 664 20 00</p>
      <p>Fax:(0216) 664 20 00</p>
      <p>Mail:info@intertech.com</p>
      <p class="text-muted">© 2021</p>
    </div>

  

    

  

    <div class="col-2 align-self-center text-center">
    <img className='img-fluid footerLogo'
                src={logo}
                alt='icerik'
                ></img>
                <p className='text-center footerText'>INHERITIUM</p>
    </div>
  </footer>
</div>
    </div>
  );
}

export default App;

