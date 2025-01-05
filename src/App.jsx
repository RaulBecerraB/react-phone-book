import { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <PersonForm newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App