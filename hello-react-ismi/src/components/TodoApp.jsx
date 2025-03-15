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
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="eleman ekle"
        name="itemName"
        value={ItemName}
        // onChange={handleInputChange}
        onChange={(e) => setItemName(e.target.value)}
      />
      {/* {ItemName} */}
      <select value={quantity} onChange={(e) => SetQuantity(e.target.value)}>
        {Array.from({ length: 100 }, (v, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}

function List({ listitems, onDeleteItem, onUpdateItem }) {
  return (
    <>
      {listitems.length > 0 ? (
        <ul>
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
        <p>Eleman Yokkkkk</p>
      )}
    </>
  );
}

function ListItem({ item, onDeleteListItem, onUpdateListItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.complated}
        onChange={() => onUpdateListItem(item.id)}
      />
      <span style={item.complated ? { textDecoration: "line-through" } : {}}>
        {item.title} - {item.quantity}
      </span>
      <button onClick={() => onDeleteListItem(item.id)}>X</button>
    </li>
  );
}

function Summary({ sumItems }) {
  const itemCount = sumItems.length;
  const complatedItemsCount = sumItems.filter((i) => i.complated).length; // sumItems.filter((i) => i.complated === true).length;

  return (
    <footer>
      {itemCount === complatedItemsCount ? (
        <p>&#128522; Alışveriş Tamamlandııı.</p>
      ) : (
        <p>
          Alışveriş sepetinizde {itemCount} üründen {complatedItemsCount} {"  "}{" "}
          tanesini aldınızzzzz.
        </p>
      )}

      <p>Toplam Ürün: {itemCount}</p>
      <p>Tamamlanan Ürün: {complatedItemsCount}</p>
    </footer>
  );
}
