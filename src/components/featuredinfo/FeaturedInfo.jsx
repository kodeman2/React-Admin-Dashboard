import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featured">
     <div className="featuredItem">
      <span className="featuredTitle">Revenue</span>
      <div className="featuredMoneyContainer">
       <span className="featuredMoney">$3,213</span>
       <span className="featuredMoneyRate">-13.6 <ArrowDownward className="featuredIcon negative" /></span>
      </div>
      <span className="featuredSub">Compared to last month</span>
     </div>
     <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
       <span className="featuredMoney">$4,740</span>
       <span className="featuredMoneyRate">-2.3 <ArrowDownward className="featuredIcon negative" /></span>
     </div>
     <span className="featuredSub">Compared to last month</span> 
     </div>
     <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
       <span className="featuredMoney">$1,322</span>
       <span className="featuredMoneyRate">+3.6 <ArrowUpward className="featuredIcon" /></span>
      </div>
      <span className="featuredSub">Compared to last month</span>

     </div>
    </div>
  )
}


