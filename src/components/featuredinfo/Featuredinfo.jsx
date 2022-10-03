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
    </div>
  )
}
