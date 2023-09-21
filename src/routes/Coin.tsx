import { useParams } from "react-router-dom";

interface Parms{
  coinId : string;
}



function Coin() {
	const {coinId} = useParams<Parms>();
	return <h1> Coin:{coinId} </h1> 
}

export default Coin;