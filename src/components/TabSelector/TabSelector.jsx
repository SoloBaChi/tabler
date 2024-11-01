import React from 'react'
import { Link } from 'react-router-dom'

function TabSelector({
    tabs,
    activeTab,
    handleClick,
}) {
  return (
    <div className='tab-container mt-4 pb-2 w-[768px] md:w-[100%] overflow-auto'>
        <div className='flex gap-[4%] w-[980px]'>
            {
                tabs.map(tab => (
                    <Link 
                     className={`${activeTab === tab?.title ? "border-b-4 border-[#0088FE]" : ""}`}
                     key={tab?.id} 
                    //  onClick={() => console.log(`${tab}`)}
                     onClick={() => handleClick(tab?.title)}
                     >
                     {tab?.title}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default TabSelector