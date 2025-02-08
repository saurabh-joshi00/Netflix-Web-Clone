import React from 'react'

export default function Question({ faqData, onClick, isOpen }) {
  return (
    <>
      <div className='bg-[#2d2d2d] mb-[7px] overflow-hidden rounded-[10px_10px_0_0]'>
        <div 
        onClick={ onClick } 
        className='p-[20px] text-white sm:text-[25px] text-[20px] flex justify-between items-center border-b-[2px] border-black cursor-pointer hover:bg-[rgb(78,78,78)] transition ease-in duration-900'>
          <h1>{ faqData.question }</h1>
          <span className={`${ isOpen ? 'rotate-180' : '' } ease-in-out duration-300`}>
            {
              isOpen 
              
              ? 

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
              </svg>

              :

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

            }
          </span>
        </div>

        <div className={ `text-white ease-in-out duration-200 sm:text-[25px] text-[20px] max-h-0 ${ isOpen ? 'sm:max-h-96 max-h-full p-[20px]' : 'max-h-0 ' } ` }>

          {/* Render answers as separate paragraphs */}
          {
            Array.isArray(faqData.answer) 
            ? 
            (
              faqData.answer.map((v, i) => (
                <p key={i} className="mb-4">{v}</p>
              ))
            ) 
            : 
            (
              <p>{faqData.answer}</p> // Fallback if the answer is a string
            )
          }
          
        </div>

      </div>
    </>
  )
}
