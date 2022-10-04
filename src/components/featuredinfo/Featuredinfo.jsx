import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

export default function Featuredinfo() {
  return (
    <div className='featured'>
<div className="featuredItem">
  <span className="featuredTitle">Revenue</span>
  <div className="featuredMoneyContainer">
    <span className="featuredMoney">$2,890</span>
    <span className="featuredMoneyRate">
     -11.4 <ArrowDownward />
    </span>
  </div>
  <span className="featuredSub">Compared to last Month</span>
</div>
<div className="featuredItem">
  <span className="featuredTitle">Sales</span>
  <div className="featuredMoneyContainer">
    <span className="featuredMoney">$8,839</span>
    <span className="featuredMoneyRate">
     -1.4 <ArrowDownward />
    </span>
  </div>
  <span className="featuredSub">Compared to last Month</span>
</div>
<div className="featuredItem">
  <span className="featuredTitle">Cost</span>
  <div className="featuredMoneyContainer">
    <span className="featuredMoney">$2,239</span>
    <span className="featuredMoneyRate">
     2.4 <ArrowUpward />
    </span>
  </div>
  <span className="featuredSub">Compared to last Month</span>
</div>
    </div>
  );
}
