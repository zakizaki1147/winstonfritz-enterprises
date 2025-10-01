import React from 'react'

const statistics = [
  {id: 1, data: '20+', desc: 'Recognized awards'},
  {id: 2, data: '35+', desc: 'Innovative products'},
  {id: 3, data: '85+', desc: 'Completed projects'},
  {id: 4, data: '98%', desc: 'Satisfaction rating'},
  {id: 5, data: '90%', desc: 'Retention rating'},
  {id: 6, data: '137', desc: 'Collaboration with other companies'},
  {id: 7, data: '1,865', desc: 'Employees from all branches'},
  {id: 8, data: '21,584', desc: 'Customers across the world'}
]

const StatisticsColumn = () => {
  return (
    <>
      <div className='grid grid-cols-6 gap-1 font-aclonica text-blue-main'>
        {statistics.slice(0, 3).map((statistic) => (
          <div key={statistic.id} className='col-span-2 w-[190px] flex flex-col justify-center items-center gap-2 bg-cream-main p-6 pt-8 rounded'>
            <h2 className='text-4xl'>{statistic.data}</h2>
            <h3 className='text-center leading-5'>{statistic.desc}</h3>
          </div>
        ))}
        {statistics.slice(3, 5).map((statistic) => (
          <div key={statistic.id} className='col-span-3 flex flex-col justify-center items-center gap-2 bg-cream-main p-8 pt-10 rounded'>
            <h2 className='text-5xl'>{statistic.data}</h2>
            <h3 className='text-center text-lg'>{statistic.desc}</h3>
          </div>
        ))}
        {statistics.slice(5).map((statistic) => (
          <div key={statistic.id} className='col-span-2 w-[190px] flex flex-col justify-center items-center gap-2 bg-cream-main p-6 pt-8 rounded'>
            <h2 className='text-4xl'>{statistic.data}</h2>
            <h3 className='text-center leading-5'>{statistic.desc}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default StatisticsColumn
