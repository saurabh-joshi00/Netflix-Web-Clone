import React, { useState } from 'react'
import logo from './assets/images/netflix-logo.png';
import monitor from './assets/images/tv.png';
import { faqData } from './faqComponents/faq.js'
import Question from './faqComponents/Question.jsx';

export default function Home() {

    const [showSelectedQ, setshowSelectedQ] = useState(null);

    const showAnswer = (i) => {

        //if the clicked item is already open then close it (set to 'null'), otherwise, open it (set to the current 'index')
        setshowSelectedQ(i === showSelectedQ ? null : i);
    };

    // track if the input is focused
    const [isFocused, setIsFocused] = useState(false);

    // check if the input has any text
    const [hasText, setHasText] = useState(false);

  return (
    <>

        {/* Banner Section Start */}

        <section className="w-[100%] h-[100vh] bg-[url('./assets/images/banner.jpg')] bg-center bg-cover">
            <div className='w-[100%] h-[100vh] bg-black bg-opacity-75'>
                <header className='max-w-[1170px] mx-auto sm:py-0 py-[10px]'>
                    <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center'>
                        <figure>
                            <img src={ logo } alt="" className='w-[190px]'/>
                        </figure>
                        <div className='flex justify-end gap-[10px]'>
                            <div className='relative'>
                            <svg className='text-white absolute top-[9px] left-[5px]' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                                <select className='bg-black text-white border-[1px] border-white sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                                    <option value="">English</option>
                                    <option value="">Hindi</option>
                                </select>
                            </div>
                            <button className='rounded-[5px] bg-[rgb(229,9,20)] text-white px-[15px] hover:bg-[rgba(193,17,25)] transition ease-in duration-900'>
                                Sign In
                            </button>
                        </div>
                    </div>
                </header>

                <div className='max-w-[1170px] mx-auto sm:pt-[120px] pt-[30px] text-center text-white'>
                    <h1 className='sm:text-[55px] text-[35px] sm:font-extrabold font-bold sm:px-0 px-[18px]'>Unlimited movies, TV <br/> shows and more</h1>
                    <h4 className='sm:text-[22px] text-[18px] font-semibold'>Starts at ₹149. Cancel at any time.</h4>
                    <p className='text-[17px] sm:pt-[30px] pt-[15px] sm:px-0 px-[20px] font-semibold'>Ready to watch? Enter your email to create or restart your membership.
                    </p>

                    <div className='max-w-[700px] sm:px-0 px-[30px] mx-auto sm:mt-[15px] mt-[15px]'>
                        <form className='grid sm:grid-cols-[63%_30%] grid-cols-1 sm:gap-[5px] justify-items-center gap-[15px]'>

                            {/* <div className='relative'>
                                <input id='emailAddress' type="text" className='peer text-white border-[1px] sm:ml-[30px] focus:outline-none focus:border-white focus:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 rounded h-[55px] sm:w-[400px] w-[260px] pt-[15px] pl-[15px] border-[#ccc] placeholder:font-semibold bg-[#101111] bg-opacity-75 placeholder-transparent' placeholder='Email address'/>
                                <label htmlFor="emailAddress" className='absolute left-[15px] sm:left-[45px] top-4 text-[#b3b3b3] font-semibold text-base transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#b3b3b3] peer-focus:top-1 peer-focus:text-[12px] peer-focus:text-[#b3b3b3] cursor-text'>Email address</label>
                            </div> */}

                            <div className='relative'>
                                <input
                                    id='emailAddress'
                                    type="email"
                                    className='peer text-white border-[1px] sm:ml-[30px] focus:outline-none focus:border-white focus:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 rounded h-[55px] sm:w-[400px] w-[260px] pt-[15px] pl-[15px] border-[#ccc] placeholder:font-semibold bg-[#101111] bg-opacity-75 placeholder-transparent'
                                    placeholder='Email address'
                                    onChange={(e) => setHasText(e.target.value.length > 0)}
                                    onBlur={(e) => setIsFocused(false)}
                                    onFocus={() => setIsFocused(true)}  
                                />
                                <label
                                    htmlFor="emailAddress"
                                    className={`absolute left-[15px] sm:left-[45px] transition-all duration-300 font-semibold text-[#b3b3b3]
                                        ${(isFocused || hasText) ? 'top-1 text-[12px]' : 'top-4 text-base'}`}>
                                    Email address
                                </label>
                            </div>

                            <button className='rounded-[5px] sm:w-[100%] w-[200px] sm:px-[20px] py-[10px] bg-[rgb(229,9,20)] text-white hover:bg-[rgba(193,17,25)] transition ease-in duration-900 sm:font-bold font-semibold sm:text-[20px] text-[18px] flex justify-center items-center'>Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"             stroke-width="1.5" stroke="currentColor" className="size-9 pl-4"> 
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/* Banner Section End */}


        {/* Enjoy on your TV Section Start */}

        <section className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className='text-white'>
                        <h1 className='sm:text-[50px] text-[30px] font-bold sm:px-0 px-[18px] sm:text-left text-center leading-[65px]'>Enjoy on your TV</h1>
                        <p className='sm:text-[25px] text-[20px] pt-[20px] sm:text-left text-center'>
                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                        </p>
                    </div>
                    <figure className='relative'>
                        <video className='absolute w-[78%] left-[12%] bottom-[22%] z-[1]' autoPlay loop muted>
                            <source src='./video-tv-in-0819.m4v'/>
                        </video>
                        <img className='relative z-[2]' src={ monitor } alt="" />
                    </figure>
                </div>
            </div>
        </section>

        {/* Enjoy on your TV Section End */}


        {/* Download your shows to watch offline Section Start */}

        <section className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <figure className='relative sm:order-1 order-2'>
                        <img src="./mobile-0819.jpg" alt="" />
                        <div className='sm:w-[55%] w-[95%] absolute sm:left-[22.5%] left-[2%] border-[3px] border-[#454444] sm:bottom-[30px] bottom-0 grid grid-cols-[80%_auto] items-center bg-black rounded-[10px]'>
                            <div className='grid grid-cols-[25%_auto] items-center gap-[10px] sm:p-[10px] p-[5px_10px]'>
                                <img src="./boxshot.png" alt="" />
                                <div className='text-white pl-[7px]'>
                                    <h3 className='font-semibold text-[18px]'>
                                        Stranger Things</h3>
                                    <span className='text-blue-600'>Downloading...  
                                    </span>
                                </div>
                            </div>
                            <div>
                                <img src="./download-icon.gif" alt="" />
                            </div>
                        </div>
                    </figure>
                    <div className='text-white sm:order-2 order-1'>
                        <h1 className='sm:text-[50px] text-[30px] font-bold sm:px-0 px-[18px] sm:text-left text-center sm:leading-[65px] leading-[45px]'>Download your shows to watch offline</h1>
                        <p className='sm:text-[25px] text-[20px] pt-[20px] sm:text-left text-center'>
                        Save your favourites easily and always have something to watch.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Download your shows to watch offline Section End */}


        {/* Watch everywhere Section Start */}

        <section className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className='text-white'>
                        <h1 className='sm:text-[50px] text-[30px] font-bold sm:px-0 px-[14px] sm:text-left text-center leading-[65px]'>Watch everywhere</h1>
                        <p className='sm:text-[25px] text-[20px] pt-[20px] sm:pb-0 pb-[20px] sm:text-left text-center'>
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                        </p>
                    </div>
                    <figure className='relative'>
                        <video className='absolute w-[62%] left-[18%] bottom-[45%] z-[1]' autoPlay loop muted>
                            <source src='./video-devices-in.m4v'/>
                        </video>
                        <img className='relative z-[2]' src="./device-pile-in.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>

        {/* Watch everywhere Section End */}


        {/* Create profiles for kids Section Start */}

        <section className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-[15px] items-center'>
                    <figure className='relative sm:order-1 order-2'>
                        <img src="./children.png" alt="" />
                    </figure>
                    <div className='text-white sm:order-2 order-1'>
                        <h1 className='sm:text-[50px] text-[30px] font-bold sm:px-0 px-[15px] sm:text-left text-center sm:leading-[65px] leading-[45px]'>Create profiles for kids</h1>
                        <p className='sm:text-[25px] text-[20px] pt-[20px] sm:text-left text-center'>
                        Send children on adventures with their favourite characters in a space made just for them - free with your membership.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Create profiles for kids Section End */}


        {/* FAQs Section Start */}

        <section className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <h1 className='text-white sm:text-[50px] text-[30px] font-bold sm:px-0 px-[15px] text-center sm:leading-[65px] leading-[45px]'>Frequently Asked Questions</h1>
                
                <div className='py-[30px]'>
                    <div> 
                        { 
                            faqData.map((v, i) => {
                                return(
                                    <Question  faqData={ v } onClick={ () => showAnswer(i) } key={ v.id } isOpen = { showSelectedQ === i } />
                                )
                            }) 
                        }
                    </div>
                </div>

                {/* Faqs Under Section Start */}

                <p className='text-white text-[17px] sm:pt-[30px] pt-[15px] sm:px-0 px-[5px] font-semibold text-center'>Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className='max-w-[820px] sm:px-0 px-[10px] mx-auto sm:mt-[15px] mt-[15px]'>
                    <form className='grid sm:grid-cols-[63%_25%] grid-cols-1 sm:gap-[15px] justify-items-center gap-[15px]'>
                        
                        <div className='relative'>
                            <input
                                autoComplete='off'
                                id='email'
                                type="email"
                                className='peer text-white border-[1px] sm:ml-[30px] focus:outline-none focus:border-white focus:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 rounded h-[55px] sm:w-[500px] w-[260px] pl-[15px] pt-[15px] border-[#ccc] placeholder:font-semibold bg-[#101111] bg-opacity-75 placeholder-transparent'
                                placeholder='Email address'
                                onChange={(e) => { setHasText(e.target.value.length > 0) }}
                                onBlur={(e) => setIsFocused(false)} // Moves label down ONLY if input is empty
                                onFocus={() =>  setIsFocused(true)} // Moves label up on focus
                            />
                            <label
                                htmlFor="email"
                                className={`absolute left-[15px] sm:left-[45px] transition-all duration-300 font-semibold text-[#b3b3b3] 
                                    ${(isFocused || hasText) ? 'top-1 text-[12px]' : 'top-4 text-base'}`}>
                                Email address
                            </label>
                            
                        </div>

                        <button className='rounded-[5px] sm:w-[100%] w-[200px] sm:px-[20px] py-[10px] bg-[rgb(229,9,20)] text-white hover:bg-[rgba(193,17,25)] transition ease-in duration-900 sm:font-bold font-semibold sm:text-[20px] text-[18px] flex justify-center items-center'>Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"             stroke-width="1.5" stroke="currentColor" className="size-9 pl-4"> 
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </button>
                    </form>
                </div>

                {/* Faqs Under Section End */}

            </div>
        </section>

        {/* FAQs Section End */}


        {/* Footer Section Start */}

        <footer className='w-[100%] bg-black border-t-[8px] border-t-[#2D2C2C] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[20px] text-white opacity-75'>
                <h1>Questions? Call <a className='underline' href="tel:000-800-919-1743">000-800-919-1743</a></h1>
                
                <div className='py-[30px] underline grid sm:grid-cols-4 grid-cols-1'>
                    <div>
                        <ul className='leading-[40px]'>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Speed Test</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-[40px]'>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Cookie Preferences</a></li>
                            <li><a href="#">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-[40px]'>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Ways to Watch</a></li>
                            <li><a href="#">Corporate Information</a></li>
                            <li><a href="#">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='leading-[40px]'>
                            <li><a href="#">Media Center</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className='pt-[20px]'>
                    <div className='relative'>
                        <svg className='text-white absolute top-[9px] left-[5px]' xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 16 16" width="16" height="16" data-icon="LanguagesSmall" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg>
                        <select className='bg-black text-white border-[1px] border-white sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                        </select>
                    </div>

                    <h1 className='pt-[30px]'>Netflix India</h1>

                </div>

            </div>
        </footer>

        {/* Footer Section End */}

    </>
  )
}
