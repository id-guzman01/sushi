import { useState } from "react";
import CartContext from "../context/CartContext";

const CartProvider = ({children}) => {

    let [listCart,setList] = useState([]);
    let [subTotal,setTotal] = useState(0);

    const add = (id, name, image, price, contador) => {

        let elemento = listCart.find((listCart) => listCart.name == name);
        if(elemento){
            alert('El producto ya esta registrado');
        }else{
            let costo = price * contador;
            setTotal(subTotal += costo);
            setList(
                listCart = [
                    ...listCart,
                    {
                        id: id,
                        name: name,
                        image: image,
                        price: price,
                        contador: contador,
                        costo: costo,
                    },
            ]);
            alert('El producto se añadió con exito a la bolsa de compras.');
        }


    };

    const reset = () => {
        if(!listCart == []){
            setTotal(setList(listCart = []));
            setTotal(subTotal = 0);
            alert('La bola de compras quedo vacia.');
        }else{
            alert('La bolsa de compra ya se encuentra vacia.');
        }
    }

    const remove = (name) => {
        let elemento = listCart.find((listCart) => listCart.name == name);
        if(elemento){
            setList([...listCart].filter((listCart) => listCart.name != name));
            listCart.find((listCart) => {
                if(listCart.name == name){
                    setTotal(subTotal = subTotal-listCart.costo);
                }
            });
            alert('El producto se retiró de la bolsa con éxito');
        }
    }

    const plusCount = (name, contador) => {
        let elemento = listCart.find((listCart) => listCart.name == name);
        if(elemento){

                let new_costo = elemento.price * contador;
                setTotal(subTotal = subTotal-elemento.costo);

                elemento.contador = contador;
                elemento.costo = new_costo;

                setTotal(subTotal = subTotal+new_costo);
        }
    }

    const minusCount = (name, contador) => {
        let elemento = listCart.find((listCart) => listCart.name == name);
        if(elemento){
            if(contador == 0){
                alert('No es posible determinar una cantidad menor a cero en la bolsa de compra');
            }else{
                let new_costo = elemento.price * contador;
                setTotal(subTotal = subTotal-elemento.costo);

                elemento.contador = contador;
                elemento.costo = new_costo;

                setTotal(subTotal = subTotal+new_costo);
            }
            
        }
    }

    return (<>
        <CartContext.Provider value={{ add, listCart, subTotal,setTotal, reset, remove, plusCount, minusCount }}>
            {children}
        </CartContext.Provider>
    </>);
}

export default CartProvider;