import './home.css'
import Featuredinfo from '../../components/featuredinfo/FeaturedInfo'
import Chart from '../../components/charts/Chart'

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo />
      <Chart />
    </div>
  )
}
