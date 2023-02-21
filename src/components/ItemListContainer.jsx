import React from 'react'
import ItemList from './ItemList'
import data from 'D:/cosas/cursos/React/preentrega2/data.json'

function ItemListContainer(greeting) {

    const getProducto = () => {
        return new Promise((resolve, reject) => {
            if (data.length === 0) {
                reject(new Error("No hay Productos"))
            }
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
    }

    async function fetchingProductos(){
        try{
            const datosFetched = await getProducto();
        }catch(err){
            <h1>{err}</h1>
        }
    }

    fetchingProductos();



    return (
        <div style={{ padding: '0.7rem'}}>
            <ItemList products={data}/>
        </div>
    )
}

export default ItemListContainer