import React, {useState} from 'react'

function TypeAssessment({ onChangePriceVariables, k }) {
   
  
    
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-3'>
          <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select what type of security assessment do you want. Black box - Gray box - White box -</h1>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              onChange={() => onChangePriceVariables('k', 1)}
              checked={k === 1}
            />
            <span>Black box</span>
          </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              onChange={() => onChangePriceVariables('k', 1.5)}
              checked={k === 1.5}
            />
            <span>Gray box</span>
          </label>
        </div>
        <div className='flex items-center gap-x-4 text-lg'>
          <label className='flex items-center gap-x-2'>
            <input
              className='w-4 h-4'
              type="radio"
              onChange={() => onChangePriceVariables('k', 2)}
              checked={k === 2}
            />
            <span>White box</span>
          </label>
        </div>
      </div>
    );
  }
  
  export default TypeAssessment;