import { useState } from "react";
import { pizzas } from "../data";

export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let pizza = pizzas[index];

  console.log(pizza);

  function handlePriviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(pizzas.length - 1);
    }
    //setIndex(index - 1);
    //alert("geri butonuna tıklandı");
    console.log(index);
  }

  function handleNextClick() {
    if (index < pizzas.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    //setIndex(index + 1);
    //alert("İleri butonuna tıklandı");
    console.log(index);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
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
          style={{ minHeight: "200px", maxHeight: "200px" }}
        />
        <div className="card-body">
          <h2 className="card-title">
            {pizza.title}{" "}
            <button className="btn btn-link p-0" onClick={handleMoreClick}>
              {showMore ? (
                <i class="bi bi-caret-up-fill"></i>
              ) : (
                <i class="bi bi-caret-down-fill"></i>
              )}
            </button>
            {showMore && <p className="card-text fs-6">{pizza.description}</p>}{" "}
          </h2>
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
