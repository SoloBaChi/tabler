import React from 'react'

const Card = ({cardData}) => {
  return (
    <figure className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4'>
        {
        cardData.map(({title,value,badge,arrIcon="^"}) => (
        <div key={title} className="card min-h-[110px] rounded-[3px] p-[1rem]  mb-8 lg:mb-0 bg-[var(--white-color)] flex text-center justify-center items-center relative border border-gray-200">
            <div className='wrapper'>
            <h4 className='text-[1.4rem] text-gray-900 font-bold'>{value}</h4>
            <p>{title}</p>
            <span className={`absolute top-2 right-4 ${
                badge < 0 ? "text-[var(--red-color)]": "text-[var(--green-color)]"}
                `
                }>
                {badge}%
                <span className={`inline-block align-top ${badge < 0 ? "rotate-180 mt-[-5px] " : ""}`}>{arrIcon}</span>
                </span>
            </div>
        </div>
        ))
        }
    </figure>
  )
}

export default Card