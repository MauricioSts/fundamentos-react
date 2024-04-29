function Saudacao ({name}){
    function gerarSaudacao(){
        return `olá, ${name}, tudo bem?`
    }
    return(
        <>{name && <p>{gerarSaudacao(name)}</p>}</>
    )
}

export default Saudacao