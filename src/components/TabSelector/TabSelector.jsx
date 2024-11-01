import React from 'react'
import { Link } from 'react-router-dom'

function TabSelector({
    tabs,
    activeTab,
    handleClick,
}) {
  return (
    <div className='tab-container mt-4 pb-2 w-[calc(100vw - 980px)]  overflow-auto'>
        <div className='flex gap-[4%] w-[980px]'>
            {
                tabs.map(tab => (
                    <Link 
                     className={`flex items-start ${activeTab === tab?.title ? "border-b-4 border-[#0088FE]" : ""}`}
                     key={tab?.id} 
                     onClick={() => handleClick(tab?.title)}
                     >
                     <span className={`'inline-block align-bottom ${activeTab === tab?.title ? "active" : ""}`} >{tab?.icon}</span>
                     {tab?.title}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default TabSelector