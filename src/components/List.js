import	Item from './Item'

function List (){
    return (
    <>
    <h1> MINHA LISTA </h1>
    <ul>
        <Item marca= "ferrari" ano_lancamento={1900}/>
        <Item marca= "lambo" ano_lancamento={1930}/>
        <Item marca= "kwid" ano_lancamento={2022}/>
        <Item/>
       
    </ul>
    
    </>
    )
}
export default List