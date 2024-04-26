function OutraLista({ itens }) {
    return (
        <>
            <h3> Lista de coisas boas:</h3>
            {itens.length > 0 ? (
                itens.map((item, index) =>
                    <p id={index}>{item}</p>)
            ) : (<p>nao ha itens na lista!</p>
            )}
        </>
    )

}
export default OutraLista