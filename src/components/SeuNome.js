function SeuNome({setName}){
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text" placeholder="Qual seu nome?" onChange={(e)=> setName(e.target.value)}></input>
        </div>
    )
}


export default SeuNome