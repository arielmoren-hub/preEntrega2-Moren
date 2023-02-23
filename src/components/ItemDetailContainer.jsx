import ItemDetail from "./ItemDetail"
import data from '/data.json'

const ItemDetailContainer =()=>{



    return(
        // <div>puto el que lees</div>
        <ItemDetail products={data}/>
    )

}

export default ItemDetailContainer