import { Col, Row, Statistic } from 'antd';
import React from 'react';
const { Countdown } = Statistic;
const deadline = new Date('2023/10/27'); // Moment is also OK

const App = ({d}) => {
  const onFinish = () => {
    console.log('finished!');
  };

  const onChange = (val) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };
  return (
    <div className="App">
      <Row>
        <div className="container-fluid text-center d-flex justify-content-center">
          <Countdown title="" value={d} format="YY MM DD HH mm ss" className='countItems' style={{ backgroundColor: '#ff5481', width: '28em', borderRadius: '25px' }} />

        </div>
      </Row>

    </div>
  )
};
export default App;