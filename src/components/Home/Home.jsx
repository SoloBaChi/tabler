import React from 'react'
import Card from '../rect-card/Card'
import PieChartView from './PieChart';
import DoughnutPieView from './DoughnutChat';
import PurchasesWaveformChart from './PurchaseWaveForm';
import UserTableData from './UserTableData';
import Header from '../Header/Header';

const Home = () => {
 const cardData = [
  {
  title:"New Tickets",
  value:"43",
  badge:6
  },
  {
  title:"Closed Today",
  value:"17",
  badge:-3
  },
  {
  title:"New Replies",
  value:"7",
  badge:9
  },
  {
  title:"Followers",
  value:"27.3k",
  badge:3
  },
  {
  title:"Daily Earnings",
  value:"$95",
  badge:-2
  },
  {
  title:"Products",
  value:"621",
  badge:-1
  },
 ];
  return (
     <>
      <Header/>
      <section className='bg-[#f5f7fb] border border-gray-200'>
       <div className="mb-8">
       <h4 className='text-[1.2rem] text-gray-900 my-8'>Dashboard</h4>
       <Card cardData={cardData}/>
       </div>
       <div className="flex flex-col lg:flex-row justify-between">
        <div className="purchase-container flex-item mb-8 lg:mb-0 p-4 rounded-[4px] basis-[48%] border border-gray-200 bg-white overflow-auto">
            <h5 className='text-[1rem] p-4 text-gray-500'>Development Activity</h5>
            <div>
            {/* Graph here */}
            <PurchasesWaveformChart/>
            </div>
            {/* <UserTableData/> */}
            <UserTableData/>

        </div>
        <div className="flex-item rounded-[4px] basis-[48%]">
            <h5 className='text-[1rem] p-4 mb-4 bg-[#dae6f9] font-[500] text-gray-700 rounded-[4px]'><strong>Read our documentation</strong> with code samples</h5>
            <div className="innner-card md:flex flex-wrap gap-[4%]">
                <figure className="flex-item mb-4 lg:mb-0  basis-[48%]">
                    <div className="card-header p-4 bg-white border border-gray-200">Doughnut Chart</div>
                    <div className="card-body border border-gray-200 bg-white">
                        <DoughnutPieView/>
                    </div>
                </figure>
                <figure className="flex-item basis-[48%] mb-4">
                <div className="card-header p-4 border border-gray-200 bg-white">Pie Chart</div>
                <div className="card-body border border-gray-200 bg-white">
                    <PieChartView/>
                </div>
                </figure>
                {/* Not fully displayed card */}
                <figure className="flex-item basis-[48%] mb-4">
                <div className="card-header p-4 border border-gray-200 bg-white">New Feedback</div>
                {/* <div className="card-body h-[100px] border border-gray-200 bg-white"></div> */}
                </figure>
                <figure className="flex-item basis-[48%]">
                <div className="card-header p-4 border border-gray-200 bg-white">Today Profit</div>
                {/* <div className="card-body h-[100px] border border-gray-200 bg-white"></div> */}
                </figure>
            </div>
        </div>
       </div>
    </section>
    </>
  )
}

export default Home