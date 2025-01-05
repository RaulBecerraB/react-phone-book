import React from 'react'

export default function Persons({filteredPersons}) {
  return (
    <div>
          <h2 className='text-2xl font-semibold mb-4'>Numbers</h2>
          <ul className='list-disc pl-5'>
              {filteredPersons.map((person, index) => (
                  <li key={index} className='mb-2'>
                      <span className='font-medium'>{person.name}</span>: {person.number}
                  </li>
              ))}
          </ul>
    </div>
  )
}
