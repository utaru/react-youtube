import { useState } from "react";

const products = [
  { id: 1, title: "Yumurta", quantity: 10, complated: true },
  { id: 2, title: "Zeytin", quantity: 1, complated: true },
  { id: 3, title: "Peynir", quantity: 2, complated: true },
  { id: 4, title: "Domates", quantity: 2, complated: true },
  { id: 5, title: "Salatalık", quantity: 3, complated: false },
];

export default function TodoApp() {
  const [items, setItems] = useState(products);

  function handleAddItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complated: !item.complated } : item
      )
    );
  }

  return (
    <div className="container my-3">
      <div className="card">
        <Header />
        <div className="card body  border-0">
          <Form onAddItem={handleAddItem} />
          <List
            listitems={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
          />
        </div>
        <Summary sumItems={items} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="card-header">
      <h1 className="h3">TodoApp - Header</h1>
    </div>
  );
}

function Form({ onAddItem }) {
  const [ItemName, setItemName] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.itemName);
    // console.log(event.target.itemName.value);
    console.log("Form Submit tuşuna basıldı");

    const product = {
      id: Date.now(),
      title: ItemName,
      quantity: quantity,
      complated: false,
    };
    console.log(product);

    //props.onAddItem(product);
    onAddItem(product);

    setItemName("");
    SetQuantity(1);
  }
  //   function handleInputChange(event) {
  //     setItemName(event.target.value);
  //   }
  return (
    <form className="container p-0" onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control"
            type="text"
            placeholder="eleman ekle"
            name="itemName"
            value={ItemName}
            // onChange={handleInputChange}
            onChange={(e) => setItemName(e.target.value)}
          />
          {/* {ItemName} */}
        </div>
        <div className="col">
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => SetQuantity(e.target.value)}
          >
            {Array.from({ length: 100 }, (v, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button className="btn btn-primary" type="submit">
            Ekle
          </button>
        </div>
      </div>
    </form>
  );
}

function List({ listitems, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {listitems.length > 0 ? (
        <ul className="list-group mt-3">
          {listitems.map((p, index) => (
            <ListItem
              item={p}
              key={index}
              onDeleteListItem={onDeleteItem}
              onUpdateListItem={onUpdateItem}
            />
          ))}
        </ul>
      ) : (
        <p className="text-danger">Eleman Yokkkkk</p>
      )}
    </>
  );
}

function ListItem({ item, onDeleteListItem, onUpdateListItem }) {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={item.complated}
          onChange={() => onUpdateListItem(item.id)}
        />
        <span style={item.complated ? { textDecoration: "line-through" } : {}}>
          {item.title} - {item.quantity}
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteListItem(item.id)}
      >
        X
      </button>
    </li>
  );
}

function Summary({ sumItems }) {
  const itemCount = sumItems.length;
  const complatedItemsCount = sumItems.filter((i) => i.complated).length; // sumItems.filter((i) => i.complated === true).length;

  return (
    <footer className="card-footer">
      {itemCount === complatedItemsCount ? (
        <p className="mb-0">&#128522; Alışveriş Tamamlandııı.</p>
      ) : (
        <p>
          Alışveriş sepetinizde {itemCount} üründen {complatedItemsCount} {"  "}{" "}
          tanesini aldınızzzzz.
        </p>
      )}

      <p className="mb-0">Toplam Ürün: {itemCount}</p>
      <p className="mb-0">Tamamlanan Ürün: {complatedItemsCount}</p>
    </footer>
  );
}
