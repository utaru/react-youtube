export default function Pizza() {
  return (
    <div className='col'>
      <div className='card'>
        <img src='/img/1.jpg' alt='Pizza' className='card-img-top p-2 p-md-3 border-bottom'/>
        <div className='card-body'>
          <h2 className='card-title'>Sucuklu Pizza</h2>
          <p className='card-text'>Lorem ipsum dolor sit amet.</p>
          <span className='badge bg-primary'>25 ₺</span>
        </div>
      </div>
    </div>
  );
}
