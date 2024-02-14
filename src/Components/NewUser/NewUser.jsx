import './NewUser.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Overlay from '../Overlay/Overlay';
import { Link } from 'react-router-dom';

const NewUser = () => {

    return (
        <div className='NewUser-hero'>
            <main className='NewUser-main d-flex flex-column align-items-center justify-content-center p-2'>
                <div className='NewUser-challenge-is-here'>
                    Streak Challenge is here!
                </div>
                <div className='NewUser-Complete-challenges-and-unlock'>
                    Complete challenges and unlock exciting rewards
                </div>
                <div className='mb-4'>
                    <img src="./Bimg.svg" alt="logo" />
                </div>
                <div className='NewUsericons d-flex flex-row justify-content-around p-2'>
                    <div><img src="./small-game-icon.svg" alt="logo" /></div>
                    <div><img src="./small-pay-icon.svg" alt="logo" /></div>
                    <div><img src="./small-id-icon.svg" alt="logo" /></div>
                    <div><img src="./small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="./small-percent-icon.svg" alt="logo" /></div>
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
                    <img src="./sand-watch.svg" alt="logo" />
                </div>
                <div className='NewUserDays10 p-2'>
                    You have <span className='NewUser10'>10</span> days to complete!
                </div>
            </div>
            <div className='NewUserchallenge-section d-flex flex-column align-items-start'>
                <div className='NewUserchallenge-1-text p-1'>
                    Challenge 1
                </div>
                <div className='NewUserchallenge-1 d-flex flex-row justify-content-between p-1'>
                    <div className='NewUserbig-challenge d-flex justify-content-center border border-1'>
                        <img src="./big-challenge-game-icon.svg" alt="logo" /></div>
                    <div className='NewUservisit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Visit My Zone</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='NewUsercheck-now me-2'>Check now</div>
                        </div>
                    </div>
                </div>
               
                <div className='NewUserchallenge-1 d-flex flex-row justify-content-between p-1'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="./Lock.svg" alt="logo" className='border border-1'/></div>
                    <div className='NewUservisit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Take a Quiz</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='NewUserplay-now me-2'><Link to="/Instruction">PLAY NOW</Link></div>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <div className='NewUserchallenge-2 p-1'>
                        Challenge 2
                    </div>
                    <Overlay/>
                </footer>
            </div>
        </div>



    )
}

export default NewUser