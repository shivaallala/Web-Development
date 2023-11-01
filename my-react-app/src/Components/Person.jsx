import React from 'react'

function Person(persons) {
  return (
    <h2>I am {persons.name} and my age is {persons.age} and I am skilled in {persons.skill}</h2>
  )
}

export default Person
