import Calc from './calc.jsx'
import useCalculo from './useCalculo.js'

function FormCalc () {

    const {
        calcularSubmit, changeN, num,
        result } = useCalculo()

    return (
            <div className="formCalc">
                <form>
                    <input
                        type="number"
                        className="inputN"
                        onChange={(e) => changeN(e)}
                    />
                    <button
                        className="btnCalcular"
                        onClick={calcularSubmit}>Calcular</button>
                </form>
                <Calc n={result}/>
            </div>
    )
}

export default FormCalc
