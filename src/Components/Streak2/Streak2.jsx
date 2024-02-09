import Overlay from '../Overlay/Overlay';
import './Streak2.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Streak2 = () => {


    return (
        <div>
            <header>
            </header>
            <main className='Streak2-main d-flex flex-column align-items-center justify-content-center p-3'>
                <div>
                    <h2>Streak Challenge is here!</h2>
                </div>
                <div>
                    <p>Complete challenges and unlock exciting rewards</p>
                </div>
                <div className='mb-5'>
                    <img src="../public/Bimg.svg" alt="logo" />
                </div>
                <div className='Streak2icons d-flex flex-row justify-content-around'>
                    <div><img src="../public/Streak2-tick.svg" alt="logo" /></div>
                    <div><img src="../public/Streak2-pay.svg" alt="logo" /></div>
                    <div><img src="../public/small-id-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-percent-icon.svg" alt="logo" /></div>
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
                    <img src="../public/sand-watch.svg" alt="logo" />
                </div>
                <div className='Streak2Days10'>
                You have <span className='Streak210'>10</span> days to complete!
                </div>
            </div>
            <div className='Streak2challenge-section d-flex flex-column align-items-start'>
                <div className='Streak2challenge-1-text fw-bold me-5 mb-3 p-2'>
                    Challenge 1
                </div>
                <div className='Streak2challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='Streak2challenge-next d-flex justify-content-center border border-1'>
                        <img src="../public/CompletedgameIcon.svg" alt="logo" /></div>
                    <div className='Streak2visit d-flex flex-column justify-content-around '>
                        <div className='d-flex flex-row justify-content-between me-1'>
                        <div className='fw-bold ms-1'>Challenge 1 completed</div>
                        <div className='Streak2completed d-flex justify-content-center p-1'>COMPLETED</div>
                        </div>
                        <div>
                            <div className='ms-2'>Lorem ipsum lorem ipsum</div>
                        </div>
                    </div>
                </div>
                <div className='Streak2challenge-1-text fw-bold me-5 mb-3 '>

                </div>
                {/* <div className='challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="../public/Lock.svg" alt="logo" /></div>
                    <div className='visit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Take a Quiz</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='check-now ms-3 fw-bold'>Play now</div>
                        </div>
                    </div>
                </div> */}
                {/* <hr /> */}
                <footer>
                    <div className='Streak2challenge-2 mb-3 p-2'>
                        Challenge 2
                    </div>
                    <Overlay />
                </footer>
            </div>
        </div>



    )
}

export default Streak2