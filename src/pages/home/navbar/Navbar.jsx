import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";



const Navbar = () => {
    return (

        <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-gray-200 text-sm py-5 ">
            <nav class="relative max-w-[85rem] w-full mx-auto px-14 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div class="flex items-center justify-between">
                    <a class="flex-none text-2xl font-bold text-black" href="#" aria-label="Brand">A U R O S <span className='text-orange-500 text-3xl'>.</span></a>
                    <div class="sm:hidden">
                        <button type="button" class="hs-collapse-toggle w-9 h-9 flex justify-center items-center font-semibold rounded-lg  hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-black text-2xl dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <FiMenu />
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div class="flex flex-col gap-y-4 mt-5 sm:flex-row sm:items-center sm:gap-y-0 gap-x-3 sm:mt-0 sm:ps-7 ml-7">


                        {/* Home */}
                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" class="flex items-center w-full  hover:text-gray-400 font-medium text-black dark:hover:text-gray-500 border-b-4 px-3 border-orange-200">
                                Home
                                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2 dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    About
                                </a>
                                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                    <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Sub Menu

                                    </button>


                                </div>

                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>

                        {/* Shop */}
                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" class="flex items-center w-full  hover:text-gray-400 font-medium text-black dark:hover:text-gray-500 hover:border-b-4 pb-[4px] hover:pb-0 px-3  border-orange-200">
                                Shop
                                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2 dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    About
                                </a>
                                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                    <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Sub Menu

                                    </button>


                                </div>

                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" class="flex items-center w-full  hover:text-gray-400 font-medium text-black dark:hover:text-gray-500 hover:border-b-4 pb-[4px] hover:pb-0 px-3  border-orange-200">
                                Product
                                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2 dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    About
                                </a>
                                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                    <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Sub Menu

                                    </button>


                                </div>

                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>

                        {/* Blog */}
                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" class="flex items-center w-full  hover:text-gray-400 font-medium text-black dark:hover:text-gray-500 hover:border-b-4 pb-[4px] hover:pb-0 px-3  border-orange-200">
                                Blog
                                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2 dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    About
                                </a>
                                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                    <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Sub Menu

                                    </button>


                                </div>

                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>

                        {/* Page */}
                        <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            <button type="button" class="flex items-center w-full  hover:text-gray-400 font-medium text-black dark:hover:text-gray-500 hover:border-b-4 pb-[4px] hover:pb-0 px-3  border-orange-200">
                                Page
                                <svg class="flex-shrink-0 ms-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                            </button>

                            <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white  p-2 dark:divide-gray-700 before:absolute top-full  before:-top-5 before:start-0 before:w-full before:h-5">
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    About
                                </a>
                                <div class="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                                    <button type="button" class="w-full flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Sub Menu

                                    </button>


                                </div>

                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Downloads
                                </a>
                                <a class="flex items-center gap-x-3.5 py-2 px-3  text-sm hover:text-orange-500 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 dark:text-gray-400   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                    Team Account
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <a class="font-medium  hover:text-gray-400 text-black dark:hover:text-gray-500 hover:border-b-4 pb-[4px] hover:pb-0 px-3  border-orange-200" href="#">Contact</a>

                        <div class="flex items-center gap-x-5 sm:ms-auto text-2xl">
                            <IoIosSearch className='hover:text-orange-500 transition-all' />
                            <BsPerson className='hover:text-orange-500 transition-all' />
                            <FiShoppingCart className='hover:text-orange-500 transition-all' />
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
};

export default Navbar;