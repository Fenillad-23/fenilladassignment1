import './App.css';
import Nav from "./navbar";
import {useParams } from 'react-router-dom';
function ProductInfo(){
   const productInfo = useParams();
   const product = JSON.parse(productInfo);
   return (<><Nav /><div>
       <h2>{product.name}</h2>
   </div></>);
}
export default ProductInfo;