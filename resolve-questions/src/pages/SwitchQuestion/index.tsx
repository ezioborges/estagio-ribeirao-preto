import './switchquestion.css';

function SwitchQuestion() {
  return (
    <div className='content'>
      <ul>
        <li>
          <h3>
            Ligar o primeiro interruptor e deixar ligado por alguns minutos.
            Depois desligá-lo.
          </h3>
        </li>
        <li>
          <h3>Ligar o segundo interruptor e deixá-lo ligado.</h3>
        </li>
        <li>
          <h3>O terceiro não acionar.</h3>
        </li>
      </ul>

      <h2>
        Resposta: Para descobrir as lâmpadas e seus respectivos interruptores:
      </h2>
      <ul>
        <li>
          <h3>
            Podemos verificar a lâmpada que permaneceu ligada visualmente.
          </h3>
        </li>
        <li>
          <h3>
            A que estiver quente, corresponde a que ficou alguns minutos ligada.
          </h3>
        </li>
        <li>
          <h3>
            E o interruptor que não foi acionado corresponde à lâmpada que
            estiver mais fria.
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default SwitchQuestion;
