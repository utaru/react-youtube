import Pizza from "./Pizza.jsx";

export default function PizzaList() {


  const pizzas = [ 
    {
      title: "Sucuklu Pizza",
      description: "1 Lorem ipsum dolor sit amet.",
      image: "1.jpg",
      price: 100,
      is_active : false,
    },
    {
      title: "Karışık Pizza",
      description: "2 Lorem ipsum dolor sit amet.",
      image: "2.jpg",
      price: 200,
      is_active : true,
    },
    {
      title: "Acılı Pizza",
      description: "3 Lorem ipsum dolor sit amet.",
      image: "3.jpg",
      price: 300,
      is_active : true,
    },
    {
      title: "Soslu Pizza",
      description: "4 Lorem ipsum dolor sit amet.",
      image: "4.jpg",
      price: 400,
      is_active : false,
    }
  ];



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