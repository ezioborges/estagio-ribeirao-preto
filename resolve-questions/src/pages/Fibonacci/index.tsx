import { useState } from 'react';
import Title from "../../components/Title";
import Subtitle from '../../components/Subtitle';

function Fibonacci() {
    const [number, setNumber] = useState<string>('');
    const [response, setResponse] = useState<string>('')

    const handleClick = () => {
        const convertToNumberType = +number; 
        
        if (convertToNumberType < 0) return setResponse('Números negativos não fazem parte da sequência de Fibonacci');

        let a = 0;
        let b = 1;

        while (a < convertToNumberType) {
            const nextValue = a + b;
            a = b;
            b = nextValue
        }

        if (a === convertToNumberType || b === convertToNumberType) {
            return setResponse(`O valor ${convertToNumberType} FAZ parte da sequência de Fibonacci`); 
        } else {
            return setResponse(`O valor ${convertToNumberType} NÃO FAZ parte da sequência de Fibonacci`)
        }
    }


    return (
        <>
            <Title>Questão 1: Fibonacci</Title>
            <div>
                <Subtitle>Digite um valor numérico para saber se faz parte ou não da sequência de Fibonacci</Subtitle>
                <input
                    type="number"
                    value={number}
                    onChange={({ target }) => setNumber(target.value)}
                />
                <button onClick={handleClick}>Verificar</button>
            </div>
            <p>{response}</p>
        </>
    );
}

export default Fibonacci;
