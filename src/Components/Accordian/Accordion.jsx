import './Accordion.css';
import React, { useState } from 'react';

function Accordion()

{
  
   const [active, setActive] = useState(false);

   const handleClick = () => {
      setActive(prev => !prev);
   };

   return (
      <div>
        
            <div>
              
               <div className='d-flex align-items-center justify-content-between'>
               <div onClick={() => handleClick()} className='AccordionBtn'>How to play</div>
               <div>&or;</div>          
               </div>
               {active && <div>
                  <div className="Accordionstars d-flex flex-column mt-2 p-3">
        <div className="blue-star d-flex flex-row justify-content-between">
          <div className=" d-flex flex-row justify-content-center align-items-center">
            <img src="./b-star.png" alt="logo" />
            </div>
          <div className='text-black'>You can only complete one activity in a day</div>
        </div>
        <div className="purple-star d-flex flex-row align-items-center justify-content-between mt-3">
          <div>
            <img src="./p-star.svg" alt="logo" />
          </div>
          <div className='text-black'>You can take step 2 only after completing step 1</div>
        </div>
        <div className="green-star d-flex flex-row align-items-center justify-content-between mt-3">
          <div>
            <img src="./g-star.svg" alt="logo" />
          </div>
          <div className='text-black'>You will be eligible for rewards when you complete all the challenges in the given time</div>
        </div>
      </div>
                  
                  
                  
                  
                  
                  </div>}
            </div>
         
      </div>
   );
}

export default Accordion;
