// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const menuData = {
//   Breakfast: [
//     {
//       name: 'Idli Sambar',
//       description: 'Steamed rice cakes served with spicy lentil soup.',
//       price: '₹40',
//       imageUrl: '/images/idli.jpg',
//     },
//     {
//       name: 'Poha',
//       description: 'Flattened rice cooked with onions and spices.',
//       price: '₹35',
//       imageUrl: '/images/poha.jpg',
//     },
//   ],
//   Lunch: [
//     {
//       name: 'Veg Thali',
//       description: 'Assorted Indian dishes served with rice and roti.',
//       price: '₹90',
//       imageUrl: '/images/vegthali.jpg',
//     },
//     {
//       name: 'Paneer Butter Masala',
//       description: 'Cottage cheese in creamy tomato gravy.',
//       price: '₹80',
//       imageUrl: '/images/paneer.jpg',
//     },
//   ],
//   Snacks: [
//     {
//       name: 'Samosa',
//       description: 'Crispy pastry filled with spiced potatoes.',
//       price: '₹20',
//       imageUrl: '/images/samosa.jpg',
//     },
//     {
//       name: 'Maggi Noodles',
//       description: 'Instant noodles with veggies.',
//       price: '₹30',
//       imageUrl: '/images/maggi.jpg',
//     },
//   ],
//   Beverages: [
//     {
//       name: 'Masala Chai',
//       description: 'Spiced Indian tea.',
//       price: '₹15',
//       imageUrl: '/images/chai.jpg',
//     },
//     {
//       name: 'Cold Coffee',
//       description: 'Chilled coffee with cream.',
//       price: '₹40',
//       imageUrl: '/images/coldcoffee.jpg',
//     },
//   ],
// };

// const MenuPage = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />

//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Canteen Menu</h1>

//         {Object.entries(menuData).map(([category, items]) => (
//           <div key={category} className="mb-16">
//             <h2 className="text-2xl font-semibold text-indigo-600 mb-6">{category}</h2>
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {items.map((item, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
//                 >
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//                     <p className="text-sm text-gray-500">{item.description}</p>
//                     <p className="text-indigo-600 font-semibold mt-2">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default MenuPage;


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const menuItems = [
  {
    name: 'Masala Dosa',
    description: 'Crispy dosa filled with spicy mashed potatoes',
    price: 70,
    imageUrl: '/images/masaladosa.jpg'
  },
  {
    name: 'Veg Burger',
    description: 'Delicious veg patty with fresh lettuce and mayo',
    price: 50,
    imageUrl: '/images/vegburger.jpg'
  },
  {
    name: 'Grilled Sandwich',
    description: 'Toasted bread with loaded veggies and cheese',
    price: 60,
    imageUrl: '/images/vegsandwich.jpg'
  },
  {
    name: 'Chole Bhature',
    description: 'Fluffy bhature with spicy chickpeas curry',
    price: 80,
    imageUrl: '/images/cholebhature.jpg'
  },
  {
    name: 'Idli Sambar',
    description: 'Steamed idlis served with hot sambar and chutney',
    price: 40,
    imageUrl: '/images/idli.jpg'
  },
  {
    name: 'Pasta',
    description: 'Creamy tomato pasta topped with cheese',
    price: 90,
    imageUrl: '/images/Pasta.jpg'
  }
];

const MenuPage = () => {
  const [cart, setCart] = useState([]);
const navigate = useNavigate();
const addToCart = (item) => {
  const exists = cart.find((cartItem) => cartItem.name === item.name);
  if (exists) {
    setCart(
      cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
};
const getTotal = () =>
  cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
const removeFromCart = (item) => {
  const exists = cart.find((cartItem) => cartItem.name === item.name);
  if (exists && exists.quantity > 1) {
    setCart(
      cart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  } else {
    // If quantity is 1, remove item from cart
    setCart(cart.filter((cartItem) => cartItem.name !== item.name));
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      {/* Background Image Header */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/LandingImage4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative text-white text-4xl font-bold">Explore Our Menu</h1>
      </div>

      {/* Menu Items Grid */}
      <div className="flex-1 bg-white py-10 px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => {
  const cartItem = cart.find((ci) => ci.name === item.name);
  return (
    <div key={index} className="bg-white rounded-lg shadow p-4">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-orange-500 font-bold mt-2">₹{item.price}</p>

      {cartItem ? (
  <>
    {/* <p className="text-sm text-green-600 mt-2">
      Quantity in Cart: {cartItem.quantity}
    </p> */}
    <div className="flex items-center gap-2 mt-2">
      <button
        className="bg-red-600 text-white w-10 h-10 rounded hover:bg-red-700 text-xl"
        onClick={() => removeFromCart(cartItem)}
      >
        –
      </button>
      <input
        type="number"
        min="1"
        value={cartItem.quantity}
        readOnly
        className="w-12 h-10 text-center border rounded text-lg"
      />
      <button
        className="bg-red-600 text-white w-10 h-10 rounded hover:bg-red-700 text-xl"
        onClick={() => addToCart(cartItem)}
      >
        +
      </button>
    </div>
  </>
) : (
  <button
    onClick={() => addToCart(item)}
    className="mt-4 bg-red-600 text-white w-full h-10 rounded hover:bg-red-700"
  >
    Add to Cart
  </button>
)}
    </div>
  );
})}

        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
  <div className="mt-12 text-center">
    <button
      onClick={() => navigate('/checkout', { state: { cart } })}
      className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition"
    >
      Proceed to Checkout (₹{getTotal()})
    </button>
  </div>
)}


      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;

