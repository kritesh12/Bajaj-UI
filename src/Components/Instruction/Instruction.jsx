import './Instruction.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Accordion from '../Accordian/Accordion';
import { Link } from 'react-router-dom';

const Instruction = () => {

    
       
    return (
        <div>

            <header>
            </header>
            <main className='Instruction-main d-flex flex-column align-items-center justify-content-center p-2'>
                <div>
                    <h2>Streak Challenge is here!</h2>
                </div>
                <div>
                    <p>Complete challenges and unlock exciting rewards</p>
                </div>
                <div className='mb-5'>
                    <img src="./Bimg.svg" alt="logo" />
                </div>
                <div className='Instructionicons d-flex flex-row justify-content-around p-2'>
                    <div><img src="./small-game-icon.svg" alt="logo" /></div>
                    <div><img src="./small-pay-icon.svg" alt="logo" /></div>
                    <div><img src="./small-id-icon.svg" alt="logo" /></div>
                    <div><img src="./small-trophy-icon.svg" alt="logo" /></div>
                    <div><img src="./small-percent-icon.svg" alt="logo" /></div>
                </div>
                <div className='Instructionprogress mt-2'>
                    <ProgressBar now={0} />
                </div>
                <div className='Instructionhow-to-play d-flex flex-row justify-content-between fw-bold mb-3'>
                    <div className='Instructionhow-to-play mt-3'>
                    <Accordion />
                    </div>
                </div>
            </main>
            <div className='challenge-1-text fw-bold me-5 mb-3 p-2'>
                    Challenge 1
                </div>
                <div className='NewUserchallenge-1 d-flex flex-row justify-content-between p-2'>
                    <div className='d-flex justify-content-center border border-1'>
                        <img src="./big-challenge-game-icon.svg" alt="logo" /></div>
                    <div className='NewUservisit d-flex flex-column justify-content-around border border-1'>
                        <div className='fw-bold ms-1'>Open My Zone</div>
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                            <div className='Instructioncheck-now  fw-bold'><Link to='/Streak1'>Check now</Link></div>
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default Instruction