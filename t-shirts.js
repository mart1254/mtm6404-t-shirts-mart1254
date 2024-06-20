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

function Title(props){
  return <h2>{props.title}</h2>

}



function TShirtImg(props) {
  // const tShirt = props.tshirt
  // const tShirtImg = `/images/${tShirt.image}`

  return (
    <div className="img-container">
      <img src={`/images/${props.image}`} alt={props.title} />
    </div>
  )
}



function Price({price}){
  return <p className="price-shirt">$ {price}</p>
}



function Stock({stock}){
  return <p className="stock-shirt">{stock > 0 ? `${stock} left!` : `Out of Stock!`}</p>
  // {stock > 0 ? `${stock} left!` : `Out of Stock!`}</p>
}



function QuantitySelectBox({tshirt, onQuantityChange}){
  const options = []
  for(let i = 1; i <= tshirt.stock; i++){
    options.push(<option key={i} value={i}>{i}</option>)
  }

  function changeHandler(event){
    const value = event.target.value
    onQuantityChange(tshirt, value)
  }

  return(
    <select id="stock" className="select" value={tshirt.quantity} onChange={changeHandler}>
      {options}
    </select>
  )
}



function Buy({stock, onBuy, tshirt}){
  function clickHandler(event){
    event.preventDefault()
    onBuy(tshirt)
  }

  return(
    stock ?
    <button className="buy" onClick={clickHandler}>Buy</button> : ""
  )
}



function Tshirt({tshirt}){
  const [stock, setStock] = React.useState(tshirt.stock)
  const [quantity, setQuantity] = React.useState(tshirt.quantity)

  function handleBuy(){
     if(stock >= quantity) {
      setStock(stock - quantity)
      setQuantity(1)
    }
  }

  function handleQuantityChange(tshirt, value){
    setQuantity(value)
  }

  return(
    <div className="card-shirt">
    <TShirtImg image={tshirt.image} title={tshirt.title}/>

    <div className="card-description">
      <Title title={tshirt.title}/>
      <Price price={tshirt.price}/>
      <Stock stock={stock}/>
     {stock > 0 && <QuantitySelectBox tshirt={{...tshirt, stock, quantity}} onQuantityChange={handleQuantityChange}/>}
      <Buy stock={stock} onBuy={handleBuy} tshirt={{...tshirt, stock, quantity}}/>
    </div>
  </div>
  )
}



function App() {
  return (
    <React.Fragment>
      <div className="container">
        <h1>T-Shirt Assignment</h1>
        <div id="shirt-container" className="container-grid">
        {tshirts.map(tshirt => <Tshirt key={tshirt.id} tshirt={tshirt} />)}
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