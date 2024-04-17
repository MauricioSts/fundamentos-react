function Pessoa ({nome, idade, profissao, foto}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h1> Nome: {nome}</h1>
            <p> Profissao: {profissao}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}
export default Pessoa