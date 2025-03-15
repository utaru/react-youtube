import { pizzas } from "../data";

export default function Events() {
  let index = 1;
  let pizza = pizzas[index];

  console.log(pizza);

  function handlePriviousClick() {
    index = index - 1;
    alert("geri butonuna tıklandı");
  }

  function handleNextClick() {
    index = index + 1;
    alert("İleri butonuna tıklandı");
  }
  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-3" onClick={handlePriviousClick}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={handleNextClick}>
        Next
      </button>

      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={"/img/" + pizza.image}
          alt="Pizza"
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h2 className="card-title">{pizza.title}</h2>
          <p className="card-text">{pizza.description}</p>

          <span
            className={`badge ${
              pizza.price <= 200 ? "bg-danger" : "bg-primary"
            }`}
          >
            {pizza.price} ₺
          </span>
        </div>
      </div>

      {/* <button
        onClick={() => {
          alert("Next butonuna tıklandı");
        }}
      >
        Next
      </button> */}
      {/* <button onClick={handleNextClick()}>Next</button> */}
    </div>
  );
}
