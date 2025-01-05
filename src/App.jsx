import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  function addPerson (event) {
    event.preventDefault()
    const personObject = {
      name: newName
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

  return (
    <div className='m-6 p-4 bg-white rounded-lg shadow-md shadow-black'>
      <h1 className='text-2xl font-semibold mb-4'>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => <li key={index}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App