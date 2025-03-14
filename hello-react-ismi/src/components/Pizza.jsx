export default function Pizza(/*abc,*/{pizzaObj}) {
  console.log(pizzaObj);
  // const {pizzaObj, abc} = props;
  //console.log(props);
  if (!pizzaObj.is_active) return null;

  return (
    <div className='col'>
      <div className='card'>
        <img src={"/img/" + pizzaObj.image} alt='Pizza' className='card-img-top p-2 p-md-3 border-bottom'/>
        <div className='card-body'>
          <h2 className='card-title'>{pizzaObj.title}</h2>
          <p className='card-text'>{pizzaObj.description}</p>

          <span className={`badge ${pizzaObj.price <= 200 ? 'bg-danger' : 'bg-primary'}`}>{pizzaObj.price} ₺</span>


        </div>
      </div> 
    </div>
  );
}
