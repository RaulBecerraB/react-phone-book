import React from 'react'

export default function Filter({ filter, handleFilterChange }) {
  return (
          <div className='mb-4'>
              <label className='block text-lg font-medium mb-2'>Filter by name</label>
              <input
                  value={filter}
                  onChange={handleFilterChange}
                  className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Search by name'
              />
          </div>
  )
}
