import React from 'react';

const EarnMoney = () => {
    return (
        <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                <h2 class="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">Earn free money <br /> with TV-BazerBD</h2>
                <span class="block mt-6 text-black  ">With Ciseco you will get freeship &amp; savings combo...</span>
                <div class="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
                    <a class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-gry-500 hover:text-white  hover:bg-orange-600 text-black  shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000  " rel="noopener noreferrer" href="/page-collection">Savings combo</a>
                    <a class="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-orange-600 text-white  hover:bg-white hover:text-black hover:shadow-xl shadow-xl  border-slate-100  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000  " rel="noopener noreferrer" href="/page-search">Discover more</a>
                </div>
                  
                    
                
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img class="w-full h-full lg:max-w-3xl" src="https://ciseco-reactjs.vercel.app/static/media/rightLargeImg.dd2356513f3941fd1981.png" alt="Catalogue-pana.svg" />
            </div>
        </div>
        </div>
    );
};

export default EarnMoney;