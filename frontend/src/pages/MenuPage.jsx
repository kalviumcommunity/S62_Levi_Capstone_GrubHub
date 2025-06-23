import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const menuData = {
  Breakfast: [
    {
      name: 'Idli Sambar',
      description: 'Steamed rice cakes served with spicy lentil soup.',
      price: '₹40',
      imageUrl: '/images/idli.jpg',
    },
    {
      name: 'Poha',
      description: 'Flattened rice cooked with onions and spices.',
      price: '₹35',
      imageUrl: '/images/poha.jpg',
    },
  ],
  Lunch: [
    {
      name: 'Veg Thali',
      description: 'Assorted Indian dishes served with rice and roti.',
      price: '₹90',
      imageUrl: '/images/vegthali.jpg',
    },
    {
      name: 'Paneer Butter Masala',
      description: 'Cottage cheese in creamy tomato gravy.',
      price: '₹80',
      imageUrl: '/images/paneer.jpg',
    },
  ],
  Snacks: [
    {
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes.',
      price: '₹20',
      imageUrl: '/images/samosa.jpg',
    },
    {
      name: 'Maggi Noodles',
      description: 'Instant noodles with veggies.',
      price: '₹30',
      imageUrl: '/images/maggi.jpg',
    },
  ],
  Beverages: [
    {
      name: 'Masala Chai',
      description: 'Spiced Indian tea.',
      price: '₹15',
      imageUrl: '/images/chai.jpg',
    },
    {
      name: 'Cold Coffee',
      description: 'Chilled coffee with cream.',
      price: '₹40',
      imageUrl: '/images/coldcoffee.jpg',
    },
  ],
};

const MenuPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Canteen Menu</h1>

        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">{category}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-indigo-600 font-semibold mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
