  {/* Footer */}
  import { Code2,Utensils } from 'lucide-react';


  const Footer = (()=>{

      return ( 

            <footer className="bg-gray-800">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center">
                      <Utensils className="h-8 w-8 text-indigo-400" />
                      <span className="ml-2 text-2xl font-bold text-white">GrubHub</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      Making campus dining simple, fast, and delicious.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
                    <ul className="mt-4 space-y-4">
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Support</a></li>
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Connect</h3>
                    <ul className="mt-4 space-y-4">
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Instagram</a></li>
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Twitter</a></li>
                      <li><a href="#" className="text-base text-gray-300 hover:text-white">Facebook</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                  <p className="text-base text-gray-400 md:text-center">
                    &copy; 2025 GrubHub College Canteen Management. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>


      
      )

  })

  export default Footer