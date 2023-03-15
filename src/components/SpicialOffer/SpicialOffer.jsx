import React from 'react';

const SpicialOffer = () => {
    return (
        <div  class="bg-orange-50 rounded-2xl  container   mx-auto" style={{backgroundImage: `url("https://ciseco-reactjs.vercel.app/static/media/BackgroundLine.2aa0910fef98274b2f4855249cd61c4c.svg")`}}>
            <div class="items-center lg:flex">
                <div class="w-full lg:w-1/2">
                    <div class="lg:max-w-lg px-10">
                        <h2 class="font-semibold text-4xl md:text-5xl">Don't miss out on special offers</h2>
                        
                        <p class="mt-3 text-black ">Register to receive news about the latest, savings combos, discount codes...</p>
                        <ul class="space-y-4 mt-10">
                            <li class="flex items-center space-x-4">
                                <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-purple-800 bg-purple-100  relative">01</span>
                                <span class="font-medium text-neutral-700 dark:text-neutral-300">Savings combos</span>
                            </li>
                            <li class="flex items-center space-x-4">
                                <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100  relative">02</span>
                                <span class="font-medium text-neutral-700 dark:text-neutral-300">Freeship</span>
                            </li>
                            <li class="flex items-center space-x-4">
                                <span class="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100  relative">03</span>
                                <span class="font-medium text-neutral-700 dark:text-neutral-300">Premium magazines</span>
                            </li>
                        </ul>

                        <form class="mt-10 relative max-w-sm">
                            <input type="email" class="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 " required="" aria-required="true" placeholder="Enter your email" />
                                <button class="ttnc-ButtonCircle flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6"><path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg>
                                </button>
                        </form>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full  lg:mt-0 lg:w-1/2">
                    <img class="w-full -mt-10 h-full lg:max-w-3xl" src="https://ciseco-reactjs.vercel.app/static/media/promo3.9002024e8eda57df7e8e.png" alt="Catalogue-pana.svg" />
                </div>
            </div>
    </div>
    );
};

export default SpicialOffer;