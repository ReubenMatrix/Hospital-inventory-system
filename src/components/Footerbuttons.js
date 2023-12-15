import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Footerbuttons() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const navigate = useNavigate();

    const handleButtonClick = () => {
      console.log("Button clicked!");
      navigate("/");
    };
  return (
      <div className="flex items-center justify-between w-[1130px] h-[130px] overflow-hidden mb-8">

          <div className="flex flex-col items-start justify-start w-[200px] h-[105px] overflow-hidden">
              <button
                  className="cursor-pointer p-0  bg-[#38B1BD] rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                  autoFocus={true}
                  id="filterbut"
              >
                  <div className="text-xl font-inter text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                      Delete
                  </div>

              </button>

          </div>



          <div className="flex flex-col space-y-4 items-end">

              <button
                  className="cursor-pointer p-0 bg-teal rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[290px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                  autoFocus={true}
                  onClick={handleButtonClick}
                  id="filterbut"
              >
                  <div className="text-xl font-inter flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
</svg>

                      Print all items with stock
                  </div>
              </button>

              <button
                  className="cursor-pointer p-0 bg-teal rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[290px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
                  autoFocus={true}
                  id="filterbut"
              >
                  <div className="text-xl font-inter flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

                      Email all items with stock
                  </div>
              </button>

          </div>
      </div>

  )
}

export default Footerbuttons
