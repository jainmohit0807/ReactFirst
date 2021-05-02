import React from 'react'
import { Person } from './Person'

export const PeopleList = ({people}) => {
    return(
    <>
    {people.map(person => <Person person = {person} key={person.name}/> )}
        </>
    )

}