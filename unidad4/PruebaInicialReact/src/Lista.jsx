import Item from "./Item";
function Lista(){
   let array=["Huevos","Pan","Penne","aergio"];
   let lista = array.map((name,index)=><Item key={index} nombre={name}></Item>);
    return(
        <>
            <ul>
                {lista}
            </ul>
        </>
    );
}
export default Lista
