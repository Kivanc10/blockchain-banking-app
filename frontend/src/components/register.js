import logo from './raw/logoveyazi.png';
import './register.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import { DatePicker, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faChartSimple, faBitcoinSign, faBuildingColumns, faPersonBreastfeeding, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import intertech from './raw/intertech.png';

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

function App() {
    return (
      <div className='body'>
        <div className='container-fluid d-flex justify-content-center'>
            <div className='col-4 col-md-4 inher'>
                <img className='img-fluid' src={logo} alt='HeaderImage'></img>
                {/*<span className='hName'>INHERITIUM</span>*/}
            </div>
            <div className='col-4 col-md-4 register'>
            <form>
                <div className="d-grid mb-2" style={{color:'red'}}>
                    <p>
                        <a className="back" href="/sign up">&#x276E; Back</a>
                    </p>
                </div>
                <h3 className="mb-3" style={{paddingLeft:'17%'}}>Create a new guest account</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        />
                </div>
                <div className="mb-3">
                    <label>Phone number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="(+123) 9876543210"
                        />
                </div>
                <div className="mb-3">
                    <label>ID number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter ID number"
                        />
                </div>
                <div className="mb-3 date">
                    <label>Date of birth</label>
                    <div>
                        <Space direction="vertical">
                             <DatePicker onChange={onChange} />
                        </Space>
                    </div>
                </div>
                <div className="d-grid mb-2">
                     <button type="submit" className="btn btn-primary continue">
                        Continue
                     </button>
                </div>
                <p>
                    By signing in, you're agree to our <a href="/sign-in">Terms & Condition</a> and <a href="/sign-in">Privacy Policy.</a>
                </p>
                </form>
            </div>
            <div className='col-4 col-md-4'>
            </div>
        </div>
        <div>
            <img className='img-fluid intertech' src={intertech} alt='HeaderImage'></img>
    </div>
    </div>
    )
}
export default App;