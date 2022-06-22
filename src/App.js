import {useState} from "react"
import Coin from "./Coin";
import './App.css';
import Jut from "./jut.png"
import {Input} from "semantic-ui-react"

function App() {
  const [coins,setCoins]=useState([])
  const [search,setSearch]=useState("")


  fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response) => response.json())
    .then((data) => {
      setCoins(data)
      console.log(data)
    })
    .catch(error => console.log(error ))



function handleChange(e){
setSearch(e.target.value)
}

const filteredCoin = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())
)
 


return (
    <div>
    <img className="logo" src={Jut} />
    <div className="search">
     <h1>Search a currency</h1>
     <form >
       <Input placeholder="Search a Currency" onChange={handleChange}  type="text"></Input>
     </form>
     </div>
     {
       filteredCoin.map(coin =>{
         return(
           <Coin 
           key={coin.id} 
           name={coin.name} 
           price={coin.current_price} 
           image={coin.image}
           marketCap={coin.market_cap}
           symbol={coin.symbol}
           priceChange={coin.price_change_percentage_24h}
           volume={coin.total_volume}
           />
         )
       })
     }

    </div>
  );
}

export default App;
