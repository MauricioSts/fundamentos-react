function Evento ({numero}){

    function meuEvento(){
        console.log ('fui ativado', {numero} )
    }

    return (
        <div>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento