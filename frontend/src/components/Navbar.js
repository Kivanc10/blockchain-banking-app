import { useNavigate } from "react-router-dom";
import logo from "./raw/logoveyazi.png";
import intertech from "./raw/intertechLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobe,
  faArrowRightFromBracket,
  faUsers,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

const Navbar = ({ type }) => {
  const navigate = useNavigate();

  const normalMenu = (
    <Menu className="menu" defaultSelectedKeys={["4"]}>
      <img
        className="rounded mx-auto d-block mb-4 test"
        src={logo}
        alt="HeaderImage"
      ></img>
      <Menu.Item className="item mb-3" onClick={() => navigate("/dashboard")}>
        <FontAwesomeIcon className="ServiceIcon" icon={faHome} /> Dashboard
      </Menu.Item>
      <Menu.Item className="item mb-3" onClick={() => navigate("/transaction")}>
        <FontAwesomeIcon className="ServiceIcon" icon={faGlobe} /> Transactions
      </Menu.Item>
    </Menu>
  );

  const guestMenu = (
    <Menu className="menu" defaultSelectedKeys={["4"]}>
      <img className="img-fluid test" src={logo} alt="HeaderImage"></img>
      <Menu.Item className="item">
        <FontAwesomeIcon className="ServiceIcon" icon={faHome} /> Dashboard
      </Menu.Item>
      <Menu.Item className="item">
        <FontAwesomeIcon className="ServiceIcon" icon={faGlobe} /> Transactions
      </Menu.Item>
    </Menu>
  );

  const adminMenu = (
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
        <FontAwesomeIcon
          className="fa-solid fa-arrow-right-to-bracket"
          icon={faArrowAltCircleRight}
        />{" "}
        Logs
      </Menu.Item>
      <img
        className="rounded mx-auto d-block fixed-bottom intertech2"
        src={intertech}
        alt="HeaderImage"
      ></img>
    </Menu>
  );

  const menuSwitch = () => {
    console.log(type);
    switch (type) {
      case "normal":
        return normalMenu;
      case "admin":
        return adminMenu;
      case "guest":
        return guestMenu;
      default:
        return <Menu></Menu>;
    }
  };

  return (
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

      {menuSwitch()}

      <img
        className="rounded mx-auto d-block fixed-bottom intertech2"
        src={intertech}
        alt="HeaderImage"
      ></img>
    </Sider>
  );
};

export default Navbar;
