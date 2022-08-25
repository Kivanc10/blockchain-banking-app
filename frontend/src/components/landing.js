import logo from "./raw/logo.png";
import "./css/landing.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { Form, Nav, Navbar } from "react-bootstrap";
import chart from "./raw/Charts Section.png";
import Button from "react-bootstrap/Button";
import metamask from "./raw/metamask-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-multi-carousel/lib/styles.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  faMoneyBillTransfer,
  faChartSimple,
  faBitcoinSign,
  faBuildingColumns,
  faPersonBreastfeeding,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { BankingContext } from "../context/BankingContext";
import Team from "./team";
<link
  href="//db.onlinewebfonts.com/c/9dc59b82721662bb26b8afb510dc29c8?family=Arima+Madurai"
  rel="stylesheet"
  type="text/css"
/>;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Landing = () => {
  const { currentAccount, connectWallet, metamaskBtnText } =
    useContext(BankingContext);

  return (
    <div className="body">
      {/* Navbar  Start*/}
      <Navbar bg="" expand="lg" className="fixed-top nbBg">
        <Container fluid>
          <Navbar.Brand href="#Home">
            <img className="img-fluid" src={logo} alt="HeaderImage"></img>
            <span className="hName">INHERITIUM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="navbarText" href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="navbarText" href="#wwR">
                About
              </Nav.Link>
              <Nav.Link className="navbarText" href="#rService">
                Services
              </Nav.Link>
              <Nav.Link className="navbarText" href="#Team">
                Team
              </Nav.Link>
              <Nav.Link className="navbarText" href="#rFAQ">
                FAQ
              </Nav.Link>
              <Nav.Link className="navbarText" href="#rContact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                onClick={connectWallet}
                variant="outline-success"
                className="navbarBtn mmBtn"
                style={{
                  backgroundColor: "#C5C9F6",
                  borderColor: "#C5C9F6",
                  width: "6em",
                  height: "5em",
                }}
              >
                <img src={metamask} className=" w-75" alt="" />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Navbar End */}
      {/* Mini Title Start */}
      <div
        className="container-fluid d-flex justify-content-center"
        id="Home"
        style={{ marginTop: "6em" }}
      >
        <div
          className="justify-content-center"
          style={{ fontSize: "1.4em", marginTop: "2em" }}
        >
          Blockchain investment app for financier
        </div>
      </div>
      {/* Mini Title End */}

      {/* Main Section Start */}
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ marginTop: "2em" }}
      >
        <div className="col-4 col-md-4">
          <img className="w-100 h-100" src={chart} alt="" />
        </div>
        <div className="col-3 col-md-3 d-flex align-self-center flex-column">
          <div className="container-fluid  roboto">
            <h3 style={{ color: "purple" }}>
              Manage your <br /> finances like a pro <br /> in no time
            </h3>
          </div>
          <div className="container-fluid" id="wwR">
            <p style={{ color: "black", fontWeight: "bold" }}>
              With the application, information such as seeing the summary of
              your account status, viewing the last transaction and financial
              analysis will be with you. You will be able to safely track your
              investment and pass it on to future generations
            </p>
          </div>
        </div>
      </div>

      {/* Main Section End */}
      {/* Who are we Section Start */}
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-8">
          <h1 style={{ color: "purple" }}>
            Who are <span style={{ color: "purple" }}>we ?</span>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-6">
          <p style={{ color: "black", fontWeight: "bold" }} id="rService">
            {" "}
            Inheritium is a revolutionary creation created to help you manage
            your money, save money and leave a legacy for future generations. If
            you want to leave a wonderful legacy to your children, we are here
            for you.
          </p>
        </div>
      </div>
      {/* Who are we Section End */}
      {/* Services Section Start */}
      <div class="row justify-content-center text-center container-fluid">
        <div
          class="col-12 "
          style={{ marginTop: "75px", marginBottom: "55px" }}
        >
          <h1 style={{ color: "purple", fontSize: "3em" }}>Our Services</h1>
        </div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faMoneyBillTransfer}
                />
              </h5>
              <h6 class="card-title mb-2 sBTitle">Transfer</h6>
            </div>
          </div>
        </div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faHandHoldingDollar}
                />
              </h5>
              <h6 class="card-title mb-2 sBTitle">Withdraws</h6>
            </div>
          </div>
        </div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faBitcoinSign}
                />
              </h5>
              <h6 class="card-title mb-2 sBTitle">Purchase</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center text-center container-fluid">
        <div class="col-12" style={{ marginTop: "75px" }}></div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faPersonBreastfeeding}
                />
              </h5>
              <h6 class="card-title mb-2  sBTitle">Inheritance Transactions</h6>
            </div>
          </div>
        </div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox" style={{ width: "18rem;" }}>
            <div class="card-body">
              <h5 class="card-title  fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faBuildingColumns}
                />
              </h5>
              <h6 class="card-title sBTitle mb-2 ">Bank Statement</h6>
            </div>
          </div>
        </div>
        <div class="col-2 justify-content-center d-flex">
          <div class="card ServicesBox">
            <div class="card-body">
              <h5 class="card-title  fa-3x">
                <FontAwesomeIcon
                  className="ServicesIcon"
                  icon={faChartSimple}
                />
              </h5>
              <h6 class="card-title mb-2 sBTitle " id="rOTeams">
                Instantaneous Financial Analyses
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section End */}

      <div id="rFAQ"></div>
      {/* News Section Start */}
      {/*  <div
        class="row justify-content-center text-center container-fluid"
        style={{ marginTop: "75px" }}
      >
        <div class="col-8">
          <h1 style={{ color: "blue" }}>Agenda & News</h1>
        </div>
      </div>
      <div
        class="row justify-content-center text-center container-fluid"
        style={{ marginTop: "15px" }}
      >
        <div class="col-12">
          <MDBCarousel showControls interval={10000}>
            <MDBCarouselInner>
              <MDBCarouselItem className="active">
                <MDBCarouselElement src={icerik1} alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem>
                <MDBCarouselElement src={icerik2} alt="..." />
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
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
      */}
      {/* News Section End */}

      <Team></Team>

      {/*FAQ Section Start */}
      <div
        class="row justify-content-center text-center container-fluid"
        style={{ marginTop: "75px" }}
      >
        <div class="col-8">
          <h1 style={{ color: "purple" }}>
            Frequently{" "}
            <span style={{ color: "rgb(114, 114, 194)" }}>asked question</span>
          </h1>
        </div>
      </div>
      <div class="row justify-content-center text-center container-fluid">
        <div class="col-6">
          <p style={{ color: "white", fontWeight: "bold" }}>
            If you are not sure whether Draft is suitalbe for you or not, do not
            worry. We are here to explain everything you might want to know
          </p>
        </div>
      </div>
      <div className="row justify-content-center text-center container-fluid">
        <div className="col-6 text-center">
          <Accordion className="accordion" allowZeroExpanded="true">
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  What is the difference between INHERITIUM and a Bank account ?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                <p>
                  you can easily invest your accumulation via Inheritium on the
                  contrary your bank account
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  Who can open INHERITIUM account ?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                <p>
                  Anyone who is over the age of 18 and has no problems with
                  legal processes can open an account in our system.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  Can my children transact through their accounts?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                <p>
                  Children will not be able to perform transactions until they
                  reach the legal age limit. The legal age has been determined
                  as 18.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  Can I cancel my subscription or switch to another account
                  anytime?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                <p>
                  Our system has been designed to allow this easily. You can
                  cancel your subscription or switch to your another Inheritium
                  account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <AccordionItemHeading className="accordion-header">
                <AccordionItemButton className="accordion-button">
                  What happens if I invest less than X coins?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="accordion-body">
                <p>The minimum order amount is set as 10 TRY by our system.</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/*FAQ Section End */}
      <div class="container-fluid nbBg " id="rContact">
        <footer class="row row-cols-5 py-3 my-5 border-top">
          <div class="col-2 text-center"></div>
          <div class="col-8 text-center">
            <h6>Contact :</h6>
            <p>
              Sanayi Mahallesi, Teknopark Bulvarı 1/3C, Kurtköy, 34906
              Pendik/Istanbul
            </p>
            <p>Tel:+90 216 664 20 00</p>
            <p>Fax:(0216) 664 20 00</p>
            <p>Mail:info@intertech.com</p>
            <p class="text-muted">© 2021</p>
          </div>

          <div class="col-2 align-self-center text-center">
            <img
              className="img-fluid footerLogo w-50"
              src={logo}
              alt="icerik"
            ></img>
            <p className="text-center footerText">INHERITIUM</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
