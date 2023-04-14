import Head from 'next/head'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ShopHome from './home/Home';
import CartProvider from "../Context/Cart/CartProvider";
import Topbar from '../components/topbar/Topbar'
import Cart from './Cart/Cart';

export default function Home() {

  return (
    <>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<Router>
<CartProvider>
  <Topbar />


      <div>
      
        <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<ShopHome />} />
        </Routes>
      </div>
   </CartProvider> </Router>
       
    </>
  )
}
