import Pizza from "./Pizza.jsx";
import { pizzas } from "../data.js";

export default function PizzaList() {


  return (
    <div className="pizza-list">
      <h2>Pizza Listesiiii</h2>
      <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4'>

        {
          pizzas.length > 0 ? (
            pizzas.map((p, index) => (
              <Pizza pizzaObj={p} key={index} />
            ))
          ) : (
            <p>Ürün Yok</p>
          )
        }
        

        {
          pizzas.map((p, index) => (
            <Pizza pizzaObj={p} key={index}/*abc*//>
            // <Pizza title={p.title} description={p.description} image={p.image} price={p.price} />
          ))
        }


        {/* <Pizza
        title={pizzas[0].title}
        description={pizzas[0].description}
        image={pizzas[0].image}
        price={pizzas[0].price} /> */}


      </div>
    </div>
  );
}