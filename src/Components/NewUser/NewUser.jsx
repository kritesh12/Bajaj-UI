import './NewUser.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Overlay from '../Overlay/Overlay';

const NewUser = () => {

    return (
        <div>
            <header>
            </header>
            <main className='NewUser-main d-flex flex-column align-items-center justify-content-center p-1'>
                <div>
                    <h2>Streak Challenge is here!</h2>
                </div>
                <div>
                    <p>Complete challenges and unlock exciting rewards</p>
                </div>
                <div className='mb-5'>
                    <img src="../public/Bimg.svg" alt="logo" />
                </div>
                <div className='NewUsericons d-flex flex-row justify-content-around'>
                    <div><img src="../public/small-game-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-pay-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-id-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="../public/small-percent-icon.svg" alt="logo" /></div>
                </div>
                <div className='NewUserprogress mt-2'>
                <ProgressBar now={0} />
                </div>
                <div className='NewUserhow-to-play d-flex flex-row justify-content-between fw-bold mb-3'>
                    <div>How to play</div>
                    <div>&or;</div>
                </div>
            </main>
            <div className="NewUsersand-watch d-flex flex-row justify-content-center align-items-center fw-bold border border-1">
                <div>
                    <img src="../public/sand-watch.svg" alt="logo" />
                </div>
                <div className='NewUserDays10 p-2'>
                    You have <span className='NewUser10'>10</span> days to complete!
                </div>
            </div>
            <div className='NewUserchallenge-section d-flex flex-column align-items-start'>
                <div className='NewUserchallenge-1-text p-2'>
                    Challenge 1
                </div>
                <div className='NewUserchallenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="../public/big-challenge-game-icon.svg" alt="logo" /></div>
                    <div className='NewUservisit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Visit My Zone</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='NewUsercheck-now  fw-bold'>Check now</div>
                        </div>
                    </div>
                </div>
               
                <div className='NewUserchallenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="../public/Lock.svg" alt="logo" /></div>
                    <div className='NewUservisit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Take a Quiz</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='NewUsercheck-now ms-3 fw-bold'>Play now</div>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <div className='NewUserchallenge-2 p-2'>
                        Challenge 2
                    </div>
                    <Overlay/>
                </footer>
            </div>
        </div>



    )
}

export default NewUser