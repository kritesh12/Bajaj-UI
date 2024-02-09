import './Streak4.css'
import Buttons from '../Button/Buttons';
import { Link } from 'react-router-dom';


const Streak4 = () => {


    return (
        <div>
            <header>
            </header>
            <main className='Streak4-main d-flex flex-column align-items-center justify-content-center p-3'>
                <div>
                    <h2>Streak Challenge is here!</h2>
                </div>
                <div>
                    <p>Complete challenges and unlock exciting rewards</p>
                </div>
                <div className='mb-3'>
                    <img src="./Bimg.svg" alt="logo" />
                </div>
                {/* <div className='icons d-flex flex-row justify-content-around'>
                    <div><img src="./Streak2-tick.svg" alt="logo" /></div>
                    <div><img src="./Streak2-pay.svg" alt="logo" /></div>
                    <div><img src="./small-id-icon.svg" alt="logo" /></div>
                    <div><img src="./small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="./small-percent-icon.svg" alt="logo" /></div>
                </div> */}
                <div className='text-white mb-3'>
                    <Buttons bname='EXPLORE MORE GAMES' />
                </div>

                <div className='Streak4how-to-play d-flex flex-row justify-content-between fw-bold mb-3'>
                    <div>How to play</div>
                    <div>&or;</div>
                </div>
            </main>
            <div className="Streak4sand-watch d-flex flex-row justify-content-center align-items-center fw-bold border border-1">
                <div>
                    <img src="./sand-watch.svg" alt="logo" />
                </div>
                <div className='Streak4Days10 mt-3'>
                You have <span className='Streak410'>0</span> days to complete!
                </div>
            </div>
            <div className='Streak4challenge-section d-flex flex-column align-items-between'>
                <div className='Streak4challenge-1-text fw-bold me-5 mb-3 p-2'>
                    Challenge 1
                </div>
                <div className='Streak4challenge-1 d-flex flex-row justify-content-between p-2'>
                        <div className='Streak4challenge-next d-flex justify-content-center border border-1'>
                            <img src="./CompletedgameIcon.svg" alt="logo" /></div>
                        <div className='Streak4visit Streak4visit1 d-flex flex-column justify-content-around '>
                            <div className='d-flex flex-row justify-content-between me-1'>
                                <div className='fw-bold ms-1'>Pay via UPI</div>
                                <div className='Streak4completed d-flex justify-content-center p-1'>COMPLETED</div>
                            </div>
                            <div>
                                <div className='ms-2'>Lorem ipsum lorem ipsum</div>
                            </div>
                        </div>
                    </div>


                <hr />

                <footer>
                    <div className='Streak4challenge-1-text fw-bold me-5 mb-3 p-2'>
                      <Link to='/FinalQuiz'>Challenge 2</Link>
                    </div>

                    <div className='Streak4challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='Streak4challenge-next d-flex justify-content-center border border-1'>
                        <img src="./CompletedgameIcon.svg" alt="logo" /></div>
                    <div className='Streak4visit d-flex flex-column justify-content-around '>
                        <div className='d-flex flex-row justify-content-between me-1'>
                            <div className='fw-bold ms-1'>Open My Zone</div>
                            <div className='Streak4completed d-flex justify-content-center p-1'>COMPLETED</div>
                        </div>
                        <div>
                            <div className='ms-2'>Lorem ipsum lorem ipsum</div>
                        </div>
                    </div>
                </div>


                    


                    {/* <div className='challenge-1 d-flex flex-row justify-content-between p-2'>
                        <div className='d-flex justify-content-center border border-1'>
                            <img src="./Lock.svg" alt="logo" /></div>
                        <div className='visit d-flex flex-column justify-content-around border border-1'>
                            <div className='fw-bold ms-1'>Take a Quiz</div>
                            <div className='d-flex flex-row justify-content-between'>
                                <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                                <div className='Streak3-check-now ms-3 fw-bold'>Play now</div>
                            </div>
                        </div>
                    </div> */}

                </footer>
            </div>

        </div>



    )
}

export default Streak4