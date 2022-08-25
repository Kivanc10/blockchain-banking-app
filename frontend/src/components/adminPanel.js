import { Layout, Menu } from "antd";
import React from "react";
import logo from "./raw/logoveyazi.png";
import "./adminPanel.css";
import "./GuestMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as V from "victory";
import intertech from "./raw/intertechLogo.png";
import {
    VictoryChart,
    VictoryLine,
    VictoryTheme,
    VictoryPie,
    VictoryBar,
    VictoryScatter
} from "victory";
import {
    faHome,
    faWallet,
    faGlobe,
    faArrowRightFromBracket,
    faUser,
    faUsers,
    faSquareCaretDown,
    faArrowAltCircleRight,
    faCaretDown,
    faMagnifyingGlass,
    faGear,
    faFilter,
    faUpDown
} from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
const { Header, Content, Footer, Sider } = Layout;

const data = [
    { x: "Oct 2011", y: 70 },
    { x: "Jan 2012", y: 99 },
    { x: "Mar 2012", y: 100 },
    { x: "Apr 2012", y: 178 },
    { x: "Jun 2012", y: 245 },
    { x: "Sep 2012", y: 400 },
    { x: "Dec 2012", y: 500 }
];

const sampleData = [
    { x: "1-7", y: 19 },
    { x: "8-18", y: 25 },
    { x: "18>", y: 56 },

]



const App = () => (


    <div className="">
        <Layout hasSider>
            <Sider
                className="menu"
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="logo" />
                <Menu className="menu" defaultSelectedKeys={["4"]}>
                    <img
                        className="rounded mx-auto d-block mb-4 test"
                        src={logo}
                        alt="HeaderImage"
                    ></img>
                    <Menu.Item className="item mb-3">
                        <FontAwesomeIcon className="ServiceIcon" icon={faUsers} /> Users
                    </Menu.Item>
                    <Menu.Item className="item mb-3">
                        <FontAwesomeIcon className="fa-solid fa-square-down" icon={faSquareCaretDown} />{" "}
                        Updates
                    </Menu.Item>
                    <Menu.Item className="item mb-3">
                        <FontAwesomeIcon className="fa-solid fa-arrow-right-to-bracket" icon={faArrowAltCircleRight} />{" "}
                        Logs
                    </Menu.Item>
                    <Menu.Item className="item mb-3">
                        <FontAwesomeIcon
                            className="ServiceIcon"
                            icon={faArrowRightFromBracket}
                        />{" "}
                        Signout
                    </Menu.Item>
                    <Menu.Item className="item mb-3 ms-3">
                        EN
                        {" "}{" "}<FontAwesomeIcon
                            className="ServiceIcon"
                            icon={faCaretDown}
                        />

                    </Menu.Item>
                    <img
                        className="rounded mx-auto d-block fixed-bottom intertech2"
                        src={intertech}
                        alt="HeaderImage"
                    ></img>
                </Menu>
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 200,
                }}
            >
                <Content className="body">
                    <div className="container-fluid mainWrapper">
                        <div className="row">
                            <div className="container">
                                <div className="row py-5 firstSubContainer">
                                    <div class="col-9"></div>
                                    <div class="col-3">
                                        <div className="firstTopRight p-5">
                                            <p className="text-white">Number of accounts that will exceed the age of 18 that month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    {/* <div class="col-2">col-2</div> */}
                                    <div class="col-8 graphicBig1">
                                        <div className="victoryChartWrapper">
                                            <div>
                                                <p>Google+ User Statistics -Dec 2012</p>
                                            </div>
                                            <div>
                                                <VictoryChart width={650} height={450}>

                                                    <VictoryLine data={data} />
                                                    <VictoryScatter
                                                        size={5}
                                                        data={data}
                                                    />
                                                </VictoryChart>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1">

                                    </div>
                                    <div class="col-3 graphicBig2">
                                       <img src={require("./raw/customerSatisfactionSurvey.png")} className="customerSatisfactionSurvey" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="container">
                                <div className="row smallGraphics">
                                    {/* <div class="col-2">col-2</div> */}
                                    <div class="col-5 graphicSmall1">
                                        <VictoryPie
                                            colorScale={["red", "blue"]}
                                            data={[
                                                { x: "Male", y: 70 },
                                                { x: "Female", y: 30 },
                                            ]}
                                        />
                                    </div>
                                    <div class="col-4 graphicSmall2">
                                        <VictoryPie
                                            colorScale={["#ED2482", "#6638F9", "#3D0358"]}
                                            labelRadius={({ innerRadius }) => innerRadius + 5}
                                            data={[
                                                { x: "0", y: "%" + 10 },
                                                { x: "0", y: "%" + 20 },
                                                { x: "0", y: "%" + 5 },
                                                { x: "0", y: "%" + 3 },
                                                { x: "0", y: "%" + 2 },
                                                { x: "0", y: "%" + 70 },

                                            ]}
                                        />
                                    </div>
                                    <div class="col-3 graphicSmall3">
                                        <div className="smallGraphic3Div">
                                            <div className="smg3Top"><p className="fs-3 px-2">Age distribution of the participants</p></div>
                                            <div className="smg3Bottom">
                                                <VictoryPie
                                                    colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
                                                    data={sampleData}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="navBarDiv">
                        <nav class="navbar navbar-light navBarStyle1">
                            <div class="container-fluid">
                                <a class="navbar-brand"><p className="userListTxt">User List</p></a>
                                <form class="d-flex input-group w-auto">
                                    <span class="input-group-text border-0" id="search-addon">
                                        <FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={faMagnifyingGlass} />
                                    </span>
                                    <input
                                        type="search"
                                        class="form-control rounded"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="search-addon"
                                    />

                                </form>

                                <div class="d-flex input-group w-auto">
                                    <div className="fakeImage">

                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>

                    <div className="navBar2">
                        {/* <!-- Navbar --> */}
                        <nav class="navbar navbar-expand-lg navbar-light navBarStyle1">
                            {/* <!-- Container wrapper --> */}
                            <div class="container-fluid">
                                {/* <!-- Toggle button --> */}
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <i class="fas fa-bars"></i>
                                </button>

                                {/* <!-- Collapsible wrapper --> */}
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    {/* <!-- Navbar brand --> */}
                                    {/* <a
                                                    className="dropdown-toggle d-flex align-items-center hidden-arrow px-3"
                                                    href="#"
                                                    id="navbarDropdownMenuAvatar"
                                                    role="button"
                                                    data-mdb-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                        <div>
                                            <p style={{color : "white"}}>All (56)</p>
                                        </div>
                                    </a> */}
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                All (56)
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    {/* <!-- Left links --> */}
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <div class="dropdown px-4">

                                                <div className="addNewDiv">
                                                    <a><p className="addNewText">ADD NEW + </p></a>
                                                </div>


                                            </div>

                                        </li>
                                        {/* <li class="nav-item">
                                            <a class="nav-link" href="#">Team</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Projects</a>
                                        </li> */}
                                    </ul>
                                    {/* <!-- Left links --> */}
                                </div>
                                {/* <!-- Collapsible wrapper --> */}

                                {/* <!-- Right elements --> */}
                                <div class="d-flex align-items-center">
                                    {/* <!-- Icon --> */}
                                    <a class="link-grayish me-3" href="#">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>

                                    {/* <!-- Notifications --> */}
                                    <div className="rightIcons">
                                        <span class="input-group-text border-0" id="search-addon">
                                            <FontAwesomeIcon className="fa-solid fa-magnifying-glass" icon={faMagnifyingGlass} />
                                        </span>
                                    </div>

                                    <div className="rightIcons">
                                        <span class="input-group-text border-0" id="search-addon">
                                            <FontAwesomeIcon className="fa-solid fa-gear" icon={faGear} />
                                        </span>
                                    </div>

                                    <div className="rightIcons">
                                        <span class="input-group-text border-0" id="search-addon">
                                            <FontAwesomeIcon className="fa-solid fa-bars-filter" icon={faFilter} />
                                        </span>

                                    </div>

                                    {/* <!-- Avatar --> */}

                                </div>
                                {/* <!-- Right elements --> */}
                            </div>
                            {/* <!-- Container wrapper --> */}
                        </nav>
                        {/* <!-- Navbar --> */}
                    </div>

                    <div className="bg-white">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    {/* <th scope="col">&#9634;</th> */}
                                    <th> <input type="checkbox" /></th>
                                    <th scope="col">Image</th>
                                    <th scope="col">
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <div style={{
                                                flexGrow: 1,
                                                justifyContent: "flex-start"
                                            }}>
                                                Title
                                            </div>
                                            <div style={{
                                                flexGrow: 1,
                                                justifyContent: "flex-end"
                                            }}>
                                                <a><FontAwesomeIcon className="fa-solid fa-up-down" icon={faUpDown} color="gray" /></a>
                                            </div>
                                        </div>

                                    </th>
                                    <th scope="col">Date</th>
                                    <th scope="col">
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "row"
                                        }}>
                                            <div style={{
                                                flexGrow: 1,
                                                justifyContent: "flex-start"
                                            }}>
                                                Title
                                            </div>
                                            <div style={{
                                                flexGrow: 1,
                                                justifyContent: "flex-end"
                                            }}>
                                                <a><FontAwesomeIcon className="fa-solid fa-up-down" icon={faUpDown} color="green" /></a>
                                            </div>
                                        </div>
                                    </th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            {/* 1 s*/}
                            <tbody>
                                <tr>
                                    <th scope="row"> <input type="checkbox" /></th>
                                    <td>
                                        <div className="fakeImage">

                                        </div>
                                    </td>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <th scope="row"> <input type="checkbox" /></th>
                                    <td>
                                        <div className="fakeImage">

                                        </div>
                                    </td>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <th scope="row"> <input type="checkbox" /></th>
                                    <td>
                                        <div className="fakeImage">

                                        </div>
                                    </td>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <th scope="row"> <input type="checkbox" /></th>
                                    <td>
                                        <div className="fakeImage">

                                        </div>
                                    </td>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Status</td>
                                </tr>
                                <tr>
                                    <th scope="row"> <input type="checkbox" /></th>
                                    <td>
                                        <div className="fakeImage">

                                        </div>
                                    </td>
                                    <td>Title</td>
                                    <td>Date</td>
                                    <td>Title</td>
                                    <td>Status</td>
                                </tr>
                            </tbody>
                            {/* 1 f*/}
                        </table>
                    </div>


                </Content>
            </Layout>

        </Layout>

    </div>



);

export default App;