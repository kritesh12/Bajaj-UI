import Overlay from '../Overlay/Overlay';
import './Streak2.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';

const Streak2 = () => {


    return (
        <div className='Streak2-hero'>
            <main className='Streak2-main d-flex flex-column align-items-center justify-content-center p-3'>
            <div className='Streak2-challenge-is-here'>
                    Streak Challenge is here!
                </div>
                <div className='Streak2-Complete-challenges-and-unlock'>
                    Complete challenges and unlock exciting rewards
                </div>
                <div className='mb-4'>
                    <img src="./Bimg.svg" alt="logo" />
                </div>
                <div className='Streak2icons d-flex flex-row justify-content-around'>
                    <div><img src="./Streak2-tick.svg" alt="logo" /></div>
                    <div><img src="./Streak2-pay.svg" alt="logo" /></div>
                    <div><img src="./small-id-icon.svg" alt="logo" /></div>
                    <div><img src="./small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="./small-percent-icon.svg" alt="logo" /></div>
                </div>
                <div className='Streak2progress mt-2'>
                <ProgressBar now={15} variant="warning" />
                </div>
                <div className='Streak2how-to-play d-flex flex-row justify-content-between fw-bold mb-3'>
                    <div>How to play</div>
                    <div>&or;</div>
                </div>
            </main>
            <div className="Streak2sand-watch d-flex flex-row justify-content-center align-items-center fw-bold border border-1">
                <div>
                    <img src="./sand-watch.svg" alt="logo" />
                </div>
                <div className='Streak2Days10 p-2'>
                You have <span className='Streak210'>10</span> days to complete!
                </div>
            </div>
            <div className='Streak2challenge-section d-flex flex-column align-items-start'>
                <div className='Streak2challenge-1-text me-5 mb-1 p-2'>
                    Challenge 1
                </div>
                
                <div className='Streak2challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='Streak2challenge-next d-flex justify-content-center'>
                        <img src="./CompletedgameIcon.svg" alt="logo" /></div>
                    <div className='Streak2visit d-flex flex-column justify-content-around '>
                        <div className='d-flex flex-row justify-content-between me-1'>
                        <div className='fw-bold ms-2'>Challenge 1 completed</div>
                        <div className='Streak2completed d-flex justify-content-center p-1'>COMPLETED</div>
                        </div>
                        <div>
                            <div className='ms-2'>Lorem ipsum lorem ipsum</div>
                        </div>
                    </div>
                </div>
                
                <div className='Streak2challenge-1-text fw-bold me-5 mb-2 '>

                </div>
                {/* <div className='challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="./Lock.svg" alt="logo" /></div>
                    <div className='visit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Take a Quiz</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='check-now ms-3 fw-bold'>Play now</div>
                        </div>
                    </div>
                </div> */}
                <hr />
                <footer>
                    <div className='Streak2challenge-2 mb-3 p-2'>
                    <Link to='/Streak3'> Challenge 2</Link>
                    </div>
                    
                    <Overlay />

                </footer>
            </div>
        </div>



    )
}

export default Streak2