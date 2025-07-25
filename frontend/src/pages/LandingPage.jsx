// import { useState } from 'react';
// import {
//   Clock,
//   CreditCard,
//   ShoppingBag,
//   Award,
//   ChevronRight,
//   Utensils,
//   User
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const features = [
//     {
//       title: "Quick Ordering",
//       description: "Skip the line with our fast and easy ordering system",
//       icon: <Clock className="h-6 w-6 text-indigo-600" />
//     },
//     {
//       title: "Multiple Payment Options",
//       description: "Pay with credit card, campus card, or meal plan",
//       icon: <CreditCard className="h-6 w-6 text-indigo-600" />
//     },
//     {
//       title: "Daily Specials",
//       description: "Discover new dishes and save with daily deals",
//       icon: <ShoppingBag className="h-6 w-6 text-indigo-600" />
//     },
//     {
//       title: "Quality Ingredients",
//       description: "Fresh, locally-sourced ingredients for better meals",
//       icon: <Award className="h-6 w-6 text-indigo-600" />
//     }
//   ];

//   const testimonials = [
//     {
//       quote:
//         "GrubHub has completely changed how I eat on campus. No more waiting in long lines between classes!",
//       author: "Jamie S., Junior"
//     },
//     {
//       quote:
//         "The meal tracking feature helps me budget my meal plan points throughout the semester.",
//       author: "Alex T., Sophomore"
//     }
//   ];

//   const sampleMenuItems = [
//     {
//       name: "Grilled Sandwich",
//       description: "Toasted sandwich with veggies and cheese",
//       price: "₹60",
//       imageUrl: "/images/vegsandwich.jpg"
//     },
//     {
//       name: "Veg Burger",
//       description: "Crispy veg patty with mayo and lettuce",
//       price: "₹50",
//       imageUrl: "/images/vegburger.jpg"
//     },
//     {
//       name: "Masala Dosa",
//       description: "South Indian delicacy with chutneys",
//       price: "₹70",
//       imageUrl: "/images/masaladosa.jpg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
//             <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
//               <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="text-center lg:text-left">
//                   <h1>
//                     <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600 sm:text-base lg:text-sm xl:text-base">
//                       Campus Dining Simplified
//                     </span>
//                     <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
//                       <span className="block text-gray-900">Eat Smarter at</span>
//                       <span className="block text-indigo-600">Your College Canteen</span>
//                     </span>
//                   </h1>
//                   <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//                     GrubHub helps you order food from your campus canteen, track your meal plan balance, and discover daily specials—all from your phone.
//                   </p>
//                   <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
//                     <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
//                       <a
//                         href="/signup"
//                         className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       >
//                         Sign Up
//                       </a>
//                       <a
//                         href="/login"
//                         className="text-indigo-600 bg-indigo-50 px-6 py-3 rounded-md font-medium hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                       >
//                         Log In
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div id="features" className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//               Features
//             </h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               Everything You Need for Campus Dining
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               GrubHub streamlines your campus dining experience with these powerful features.
//             </p>
//           </div>

//           <div className="mt-10">
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="pt-6">
//                   <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
//                     <div className="-mt-6">
//                       <div>
//                         <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
//                           {feature.icon}
//                         </span>
//                       </div>
//                       <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
//                         {feature.title}
//                       </h3>
//                       <p className="mt-2 text-base text-gray-500">{feature.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Menu Preview Section */}
// <div id="menu" className="py-12 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="lg:text-center mb-12">
//       <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//         Menu Preview
//       </h2>
//       <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//         Explore Popular Dishes
//       </p>
//     </div>

//     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//       {sampleMenuItems.map((item, idx) => (
//         <div
//           key={idx}
//           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
//         >
//           <img 
//             src={item.imageUrl} 
//             alt={item.name}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
//             <p className="text-gray-600 mt-2">{item.description}</p>
//             <p className="text-indigo-600 font-bold mt-4">{item.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>

//     <div className="text-center mt-10">
//       <a
//         href="/menu"
//         className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//       >
//         View Full Menu <Utensils className="ml-2 h-5 w-5" />
//       </a>
//     </div>
//   </div>
// </div>

//       {/* Testimonials */}
//       <div id="testimonials" className="bg-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center mb-12">
//             <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
//               Testimonials
//             </h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               What Students Are Saying
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 shadow-sm"
//               >
//                 <p className="text-gray-600 italic">"{testimonial.quote}"</p>
//                 <p className="mt-4 font-medium text-gray-900">{testimonial.author}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="bg-indigo-700">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
//             <span className="block">Ready to get started?</span>
//             <span className="block text-indigo-200">Create your account today.</span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//             <div className="inline-flex rounded-md shadow">
//               <a
//                 href="/signup"
//                 className="bg-white text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center"
//               >
//                 Sign Up Now
//                 <ChevronRight className="ml-2 h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const user = JSON.parse(localStorage.getItem("user"));

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/LandingImage4.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-20 text-white max-w-3xl">
          <h2 className="text-xl font-medium text-white mb-2">Welcome to</h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-orange-500 mb-4 font-bebas">
            <span className="text-red-600">Grub</span>
            <span className="text-white">Hub</span>
          </h1>
          <p className="text-lg lg:text-xl text-white mb-8 max-w-lg">
            Bringing your college canteen online — Order effortlessly, skip the line, and enjoy your meal!
          </p>

          {/* Buttons */}
          {user ? (
  <div className="flex flex-col gap-2">
    <p className="text-white text-lg font-semibold">
      Welcome, {user.username}
    </p>
    <button
      onClick={() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate('/');
        window.location.reload(); // force refresh
      }}
      className="bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-red-100 transition"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex gap-4">
    <button
      onClick={() => navigate('/login')}
      className="bg-red-600 text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
    >
      Login
    </button>
    <button
      onClick={() => navigate('/signup')}
      className="bg-red-600 text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
    >
      Signup
    </button>
  </div>
)}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;






