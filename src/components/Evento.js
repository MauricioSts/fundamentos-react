import Button from './evento/Button'


function Evento ({numero}){

    function meuEvento(){
        console.log ('ativando primeiro evento', {numero} )
    }

    return (
        <div>
            <p>clique para disparar o evento</p>
            <Button event={meuEvento} text='Primeiro eventos'/>
        </div>
    )
}
export default Evento