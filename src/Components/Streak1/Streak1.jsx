import './Streak1.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Overlay from '../Overlay/Overlay';

const Streak1 = () => {


    return (
        <div>
            <header>
            </header>
            <main className='Streak1-main d-flex flex-column align-items-center justify-content-center p-3'>
                <div>
                    <h2>Streak Challenge is here!</h2>
                </div>
                <div>
                    <p>Complete challenges and unlock exciting rewards</p>
                </div>
                <div className='mb-5'>
                    <img src="./Bimg.svg" alt="logo" />
                </div>
                <div className='Streak1icons d-flex flex-row justify-content-around'>
                    <div><img src="./small-game-icon.svg" alt="logo" /></div>
                    <div><img src="./small-pay-icon.svg" alt="logo" /></div>
                    <div><img src="./small-id-icon.svg" alt="logo" /></div>
                    <div><img src="./small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="./small-percent-icon.svg" alt="logo" /></div>
                </div>
                <div className='Streak1progress mt-2'>
                <ProgressBar now={8} variant="warning" />
                </div>
                <div className='Streak1how-to-play d-flex flex-row justify-content-between fw-bold mb-3'>
                    <div>How to play</div>
                    <div>&or;</div>
                </div>
            </main>
            <div className="Streak1sand-watch d-flex flex-row justify-content-center align-items-center fw-bold border border-1">
                <div>
                    <img src="./sand-watch.svg" alt="logo" />
                </div>
                <div className='Streak1Days10 p-2'>
                You have <span className='Streak110'>10</span> days to complete!
                </div>
            </div>
            <div className='Streak1challenge-section d-flex flex-column align-items-start'>
                <div className='Streak1challenge-1-text fw-bold me-5 mb-3 p-2'>
                    Challenge 1
                </div>
                <div className='Streak1challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='Streak1challenge-next d-flex justify-content-center border border-1'>
                        <img src="./CompletedgameIcon.svg" alt="logo" /></div>
                    <div className='Streak1visit d-flex flex-column justify-content-around '>
                        <div className='d-flex flex-row justify-content-between me-1'>
                        <div className='fw-bold ms-1'>Open My Zone</div>
                        <div className='Streak1completed d-flex justify-content-center p-1'>COMPLETED</div>
                        </div>
                        <div>
                            <div className='ms-2'>Lorem ipsum lorem ipsum</div>
                        </div>
                    </div>
                </div>
                <div className='Streak1challenge-1-text fw-bold me-5 mb-3 '>

                </div>
                <div className='Streak1challenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="./Streak1ques.svg" alt="logo" /></div>
                    <div className='Streak1visit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Quiz</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='Streak1check-now ms-3 fw-bold'>Play now</div>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <div className='Streak1challenge-2 fw-bold mb-3 p-2'>
                        Challenge 2
                    </div>
                    
                      <Overlay />
                    
                </footer>
            </div>
        </div>



    )
}

export default Streak1