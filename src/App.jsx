import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890' }
  ])

  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  function handleFilterChange (event) {
    setFilter(event.target.value)
  }

  function addPerson (event) {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personObject))
    }
  }

  function handlePersonChange (event) {
    setNewName(event.target.value)
  }

  function handleNumberChange (event) {
    setNewNumber(event.target.value)
  }

  return (
    <div className='m-6 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Phonebook</h1>
      <div className='mb-4'>
        <label className='block text-lg font-medium mb-2'>Filter by name</label>
        <input 
          value={filter} 
          onChange={handleFilterChange} 
          className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Search by name'
        />
      </div>
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

export default App