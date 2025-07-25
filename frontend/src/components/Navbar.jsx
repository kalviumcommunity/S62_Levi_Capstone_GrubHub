// // {/* Navigation */}
// import { useState } from 'react';
// import { Menu, X, Code2, Utensils } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = (()=>{
//         const navigate = useNavigate();
//         const [isMenuOpen, setIsMenuOpen] = useState(false);

//         return(

//           <nav className="bg-white shadow-sm">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex justify-between h-16">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 flex items-center">
//                     <Utensils className="h-8 w-8 text-indigo-600" />
//                     <span className="ml-2 text-2xl font-bold text-gray-900">GrubHub</span>
//                   </div>
//                 </div>
//                 <div className="hidden md:flex items-center space-x-8">
//                   <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
//                   <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium">Testimonials</a>
//                   <button onClick={ () => navigate('/login')}> Log In </button>
//                   <button onClick={ () => navigate('/signup')}> Sign Up </button>
//                 </div>
//                 <div className="flex items-center md:hidden">
//                   <button 
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                   >
//                     {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Mobile menu */}
//             {isMenuOpen && (
//               <div className="md:hidden">
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Features</a>
//                   <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Testimonials</a>
//                   <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600">Log In</a>
//                   <a href="/signup" className="block w-full bg-indigo-600 text-white text-center px-4 py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                     Sign Up
//                   </a>
//                 </div>
//               </div>
//             )}
//           </nav>


//         )

// })

// export default Navbar


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-8 py-8 flex justify-between items-center fixed w-full z-10">
      <Link to="/" className="text-2xl text-orange-500 font-bebas">
        <span className="text-red-600">Grub</span>
        <span className="text-white">Hub</span>
      </Link>
      <div className="space-x-6">
        <Link to="/menu" className="text-white hover:text-red-600">
          Menu
        </Link>
        <Link to="/cart" className="text-white hover:text-red-600">
          Cart
        </Link>
        <Link to="/login" className="text-white hover:text-red-600">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
