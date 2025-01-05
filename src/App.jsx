import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-7890' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    <div className='m-6 p-4 bg-white rounded-lg shadow-md shadow-black'>
      <h1 className='text-2xl font-semibold mb-4'>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App