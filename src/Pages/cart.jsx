

const Cart = ({cart}) => {
    console.log(cart);

const deleted=()=>{

    fetch(`http://localhost:5001/details/${cart._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });






}








    return (
        <div>
            <div className="card w-96   shadow-xl">
  <figure className="bg-white"><img className="h-[250px] " src={cart.image} alt="Shoes" /></figure>
  <div className="card-body bg-blue-200 text-gray-950">
    <h2 className="card-title">{cart.name}</h2>
    <h2 className="card-title">price: {cart.price}</h2>
    <p>Delicious food has the remarkable power to bring people together and evoke the joy of shared moments</p>
    <div className="card-actions justify-end">
      <button onClick={deleted} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Cart;