import { Spin } from 'antd';
import { useEffect } from 'react';
import {
  getTickers,
  getCoinDetail,
  getSocialStats,
} from '../services/coinlore';

const App = () => {
  useEffect(() => {
    // getTickers();
    // getCoinDetail("90")
    getSocialStats('90');
  }, []);
  return (
    <div>
      NX Installed with Antd
      <Spin />
    </div>
  );
};

export default App;
