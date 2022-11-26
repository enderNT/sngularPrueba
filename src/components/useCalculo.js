import { useState } from 'react'
import Series from './class/Series.js'

const useCalculo = () => {

    const [num, setNum] = useState(0)
    const [result, setResult] = useState(0)

    const calcularSubmit = (e) => {
        e.preventDefault()
        const serieN = new Series(num)
        setResult(serieN.calcular())
        console.log("CALCULADO :D")
    }

    const changeN = (e) => {
        const {value} = e.target
        let parsed = parseInt(value, 10)
        if (isNaN(parsed) || parsed < 0) {
            setNum(0)
            return
        }
        setNum(parseInt(value, 10))
    }

    return {
        calcularSubmit, changeN, num,
        result
    }

}

export default useCalculo
