import { gql, useMutation } from '@apollo/client'
import React from 'react'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!{
    createProduct(record: {
        name: $name,
        quantityPerUnit: $quantityPerUnit
    }){
        record {
            name
        }
    }
}

`

const Mutation = () => {

    const [createProduct, {data, loading, error}] = useMutation(CREATE_PRODUCT, {
        variables: {
            name: "Hotdog",
            quantityPerUnit: 4
        }
    })


  return (
    <div>
        Mutation
        <button onClick={() => createProduct()}>Mutate</button>
        </div>
  )
}

export default Mutation