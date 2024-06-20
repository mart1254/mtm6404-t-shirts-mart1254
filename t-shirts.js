const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]



// ================================================ My code ====================================================

console.log("I'm working")

function TShirtImg(props) {
  const tShirt = props.tshirt
  const tShirtImg = `/images/${tShirt.image}`

  return (
    <img src={tShirtImg} alt={tShirt.title} />
  )
}

function QuantitySelectBox(props){
  const tShirt = props.tshirt

  const options = []

  for(let i = 1; i <= tShirt.stock; i++){
    options.push(<option key={i} value={i}>{i}</option>)
  }

  function changeHandler(event){
    const value = event.target.value
    props.onQuantityChange(tShirt, value)
  }

  return(
    <select id="stock" className="select" value={tShirt.quantity} onChange={changeHandler}>
      {options}
    </select>
  )
}


function TShirtCards(props) {
  const {shirts, onBuy, onQuantityChange} = props
  const cardsTShirt = shirts.map(tShirt => (
    <div key={tShirt.title} className="card-shirt">
      <div className="img-container">
        <TShirtImg tshirt={tShirt} />
      </div>
      <div className="card-description">
        <h2>{tShirt.title}</h2>
        <p className="price-shirt" >${tShirt.price}</p>
        <p className="stock-shirt">{tShirt.stock > 0 ? `${tShirt.stock} left!` : `Out of Stock!`}</p>
        {tShirt.stock > 0 && (
          <QuantitySelectBox tshirt={tShirt} onQuantityChange={onQuantityChange} />
        )}
        {tShirt.stock > 0 && (
          <button className="buy" onClick={(event) => {event.preventDefault(); onBuy(tShirt);}}>Buy</button>
        )}
      </div>
    </div>
  ))

  return cardsTShirt

}



function App() {
  const [shirts, setShirts] = React.useState(tshirts)

  function handleBuy(tShirt){
    setShirts(prevTshirts => prevTshirts.map(item =>
      item.title === tShirt.title && item.stock > 0 ? {...item, stock: item.stock - tShirt.quantity} : item
    ))
  }

  function handleQuantityChange(tShirt, quantity){
    setShirts(prevTshirts => prevTshirts.map(item => item.title === tShirt.title ? {...item, quantity} : item))
  }

  

  return (
    <React.Fragment>
      <div className="container">
        <h1>T-Shirt Assignment</h1>
        <div id="shirt-container" className="container-grid">
          <TShirtCards shirts={shirts} onBuy={handleBuy} onQuantityChange={handleQuantityChange} />
        </div>
      </div>


    </React.Fragment>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)



/* <div class="container">
    <h1>T-Shirt Assignment</h1>
    <div id="shirt-container" class="container-grid">
      <div class="card-shirt">
        <div class="img-container">
          <img src="/images/purple-t-shirt.jpg" alt="">
        </div>
        <div class="card-description">
          <h2>Pink T-Shirt</h2>
          <p class="price-shirt" >$ 7.99</p>
          <p class="stock-shirt">4 left!</p>
          <select id="stock" className="select" value="" onChange="">
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
          </select>
          <button class="buy">Buy</button>
        </div>
      </div>
    </div>
  </div>  */



// App version ==================

//   <div className="container">
//   <h1>T-Shirt Assignment</h1>
//   <div id="shirt-container" className="container-grid">
//     <div className="card-shirt">
//       <div className="img-container">
//         <img src="/images/purple-t-shirt.jpg" alt=""/>
//       </div>
//       <div className="card-description">
//         <h2>Pink T-Shirt</h2>
//         <p className="price-shirt" >$ 7.99</p>
//         <p className="stock-shirt">4 left!</p>
//         <select id="stock" className="select" value="" onChange="">
//           <option value="one">1</option>
//           <option value="two">2</option>
//           <option value="three">3</option>
//           <option value="four">4</option>
//         </select>
//         <button className="buy">Buy</button>
//       </div>
//     </div>
//   </div>
// </div> 