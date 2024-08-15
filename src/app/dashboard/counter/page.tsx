import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Shoping Cart',
 description: 'Cart',
};
export default function CounterPage() {
    
    return (
       <>
        <div className="flex flex-col w-full h-full items-center justify-center ">
            <span> Productos Carrito de compras</span>
            <CartCounter value={20}/>
        </div>
      
       </>
    );
}