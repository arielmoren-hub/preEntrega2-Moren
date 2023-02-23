import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function ItemDetail({ products }) {
  const { id } = useParams();
  const [cant, setCount] = useState(1);
  console.log(id);
  //   const bikeFilter = bikes.filter((bike) => bike.id == id);
  const productsFilter = products.filter((produnct) => produnct.id == id);
  console.log(productsFilter);

  return (
    <>
      {" "}
      {productsFilter.map((item) => (
        <div style={{ width: "100%", margin: "0 0", display: "flex" }}>
          <div style={{ width: "60%", margin: "20px" }}>
            <img width={"100%"} src={item.urlPhoto} alt="" />
          </div>
          <div style={{ width: "40%", margin: "20px", display: "block" }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p> 
              Presio: {item.price}

            </p>
            <span>Stock: {item.stock}</span>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="secondary"
                onClick={() => (cant != 1 ? setCount(cant - 1) : setCount(1))}
              >
                -
              </Button>
            <Button variant="secondary">Agregar al carrito {cant} </Button>

              
              <Button
                variant="secondary"
                onClick={() =>
                  cant != item.stock
                    ? setCount(cant + 1)
                    : setCount(item.stock)
                }
              >
                +
              </Button>
            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default ItemDetail;
