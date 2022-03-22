import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATION = gql`
query GetCharacterLocations($name: String!){
    characters(filter: {
      name: $name
    }) {
    results {
      location {
        name
      }
    }
  }
  }
`


const Search = () => {
    const [name, setName] = useState("")
    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name
        }
    })

    console.log(called, loading, error, data)


  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => getLocations()}>Search</button>
        {loading && <div>Spinner</div>}
        {data && (
            <ul>
                {data.characters.results.map(location => {
                    return (
                        <li key={data.characters.results.indexOf(location)}>{location.location.name}</li>
                    )
                })}
            </ul>
        )}
        </div>
  )
}

export default Search