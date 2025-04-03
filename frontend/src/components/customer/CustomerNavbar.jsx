import React from 'react'
import { Input } from '../ui/input'

export default function CustomerNavbar() {
  return (
    <div>
      <nav id="header" class="bg-white shadow-md fixed w-full z-50 transition-all duration-300">
    <div class="container mx-auto px-4" id="el-l5evyooo">
      <div class="flex justify-between items-center h-16" id="el-tw3ttr46">
        <div class="flex-shrink-0 flex items-center" id="el-f9d4ghmx">
          <a href="#" class="text-xl font-bold text-indigo-600" id="el-loasm2op">QuickShop</a>
        </div>
        <div class="hidden md:block flex-grow mx-8" id="el-ikl9l5mq">
          <div class="relative" id="el-sr4etyo0">
            <Input type="text" placeholder="Search for shops and products..." class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="el-lkgqjl71"/>
            <button class="absolute right-3 top-2.5 text-gray-500" id="el-6szoznfb">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" id="el-inyngndc">
                <circle cx="11" cy="11" r="8" id="el-2oh0cilm"></circle>
                <path d="m21 21-4.3-4.3" id="el-5z6hhdnq"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-1" id="el-3tk3hztx">
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors" id="el-5x87awhz">
            <span class="flex items-center" id="el-0ckmm9fn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-1" id="el-ei1zkca4">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" id="el-r18cxhp5"></path>
                <circle cx="12" cy="10" r="3" id="el-006hzsvr"></circle>
              </svg>
              Location
            </span>
          </a>
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors" id="el-5fbia8p0">
            <span class="flex items-center" id="el-a0ei358v">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart mr-1" id="el-xr62vjgf">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" id="el-8pzq8jfx"></path>
              </svg>
              Favorites
            </span>
          </a>
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors" id="el-3edzv6xa">
            <span class="flex items-center" id="el-64q0uih6">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart mr-1" id="el-58tz8n7u">
                <circle cx="8" cy="21" r="1" id="el-4yo67de4"></circle>
                <circle cx="19" cy="21" r="1" id="el-0ag12kgr"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" id="el-ihpl7qqi"></path>
              </svg>
              Cart
              <span class="ml-1 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center" id="el-yphlb1da">3</span>
            </span>
          </a>
          <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition-colors" id="el-yq3reyu0">
            <span class="flex items-center" id="el-pmdpeud5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user mr-1" id="el-obxby97z">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" id="el-e4oxo48o"></path>
                <circle cx="12" cy="7" r="4" id="el-4q4zh7r9"></circle>
              </svg>
              Account
            </span>
          </a>
        </div>
        
       
        <div class="md:hidden" id="el-4vgi5inz">
          <button id="mobile-menu-button" type="button" class="text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" id="el-4wlrkoex">
              <line x1="4" x2="20" y1="12" y2="12" id="el-sztw5oic"></line>
              <line x1="4" x2="20" y1="6" y2="6" id="el-mfhtff5v"></line>
              <line x1="4" x2="20" y1="18" y2="18" id="el-7urot7yo"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div id="mobile-menu" class="hidden md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
      <div class="px-4 py-2" id="el-9oh5yoeu">
        <Input type="text" placeholder="Search for shops and products..." class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="el-u000734j"/>
      </div>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" id="el-t2py3g8v">
        <span class="flex items-center" id="el-dfx70kg1">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin mr-2" id="el-bt0sf2lm">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" id="el-7wxfbu5p"></path>
            <circle cx="12" cy="10" r="3" id="el-7ayo1s43"></circle>
          </svg>
          Location
        </span>
      </a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" id="el-osfafggx">
        <span class="flex items-center" id="el-nok0fti6">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart mr-2" id="el-anzfjnwy">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" id="el-9eq2g5ie"></path>
          </svg>
          Favorites
        </span>
      </a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" id="el-x327zhej">
        <span class="flex items-center" id="el-dv8lb5uv">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart mr-2" id="el-j4pl3xuw">
            <circle cx="8" cy="21" r="1" id="el-87cdvj43"></circle>
            <circle cx="19" cy="21" r="1" id="el-id1bw7fg"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" id="el-wpowj0of"></path>
          </svg>
          Cart
          <span class="ml-1 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center" id="el-ddeoxgka">3</span>
        </span>
      </a>
      <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100" id="el-dle9xl17">
        <span class="flex items-center" id="el-zqt5imwk">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user mr-2" id="el-w2ww9kur">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" id="el-4t4ybo08"></path>
            <circle cx="12" cy="7" r="4" id="el-3513kz48"></circle>
          </svg>
          Account
        </span>
      </a>
    </div>
  </nav>
 </div>
)
}
