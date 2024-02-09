import { useState } from 'react';
import  Buttons  from '../Button/Buttons';
import './Completed.css'

const Completed = () =>{
    const [data, setData] = useState({
        success: true
    })
    return(
       <div className='Completed-hero d-flex flex-column justify-content-center align-items-center'>
        <div className="Completed-box d-flex-column align-items-center mt-3">
            <div className="Completed-body d-flex flex-column align-items-center text-center mt-5">
                <div>
                {data.success ? <img src="../public/happy-face-2.svg" alt="logo" />
                : <img src='./sad-face.svg' alt='logo'/>}
                </div>
                <div className='Completed-Streak mt-5'>
                    {data.success ?
                    <h3>Streak Challenge Completed!</h3>
                    : <h3>Uh-Oh!</h3>}
                </div>
                <div>
                    {data.success ?
                    <p className='mt-5'>You’ve already completed this Streak</p>
                    : <p className='mt-5'>Looks like you are not authenticated to launch this game</p>}
                </div>
            </div>

        </div>
        <div>
            {data.success ?
            <Buttons bname = {'EXPLORE MORE GAMES'}/>
            : <Buttons bname = {'GOT IT'}/>}
        </div>

       </div>
    )
}

export default Completed;