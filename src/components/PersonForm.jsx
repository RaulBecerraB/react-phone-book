import React from 'react'

export default function PersonForm({ newName, newNumber, handlePersonChange, handleNumberChange, addPerson }) {
  return (
      <form onSubmit={addPerson} className='mb-6'>
          <div className='mb-4 flex'>
              <div className='w-1/2 pr-2'>
                  <label className='block text-lg font-medium mb-2'>Name</label>
                  <input
                      value={newName}
                      onChange={handlePersonChange}
                      className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Enter name'
                  />
              </div>
              <div className='w-1/2 pl-2'>
                  <label className='block text-lg font-medium mb-2'>Number</label>
                  <input
                      value={newNumber}
                      onChange={handleNumberChange}
                      className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Enter number'
                  />
              </div>
          </div>
          <div className='text-center'>
              <button
                  type="submit"
                  className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
              >
                  Add
              </button>
          </div>
      </form>
  )
}
