import { useEffect, useState } from "react";

export function useFetch(url){
    const[data , setData] = useState(null)
    const [isPedding, setIsPedding] = useState(false)
    const[error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsPedding(true)
            try {
                const req = await fetch(url)
                if(!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIsPedding(false)
            }
            catch (err) {
                setError(err.message)
                console.log(err.message)
                setIsPedding(false)
            }
        }
        fetchData()
    }, [url])
    
    return {data,isPedding, error}
}