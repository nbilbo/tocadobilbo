// https://youtu.be/Jl4q2cccwf0?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d

import { useState, useEffect } from 'react'

const useFetch = (endpoint) => {
    let [data, setData] = useState(null)
    let [isPeding, setPending] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {
        
        setTimeout(() => {
            // requisição ao endpoint.
            fetch(endpoint)
            .then((response) => {

                // ops, algo de errado.
                if(!response.ok) {
                    throw Error('Desculpe, não conseguimos acessar nossos dados 😥.')
                }

                // tudo certo.
                return response.json() 
            })
            // atualizando nossos dados.
            .then((data) => { 
                setData(data)
                setPending(false)
                setError(null)
            })
            // capturando erros.
            .catch((err)=>{
                console.log(err.message)
                setError(err.message)
                setPending(false)
            })
        }, 1000)
    }, [endpoint])

    return {data, isPeding, error}
}

export default useFetch;
