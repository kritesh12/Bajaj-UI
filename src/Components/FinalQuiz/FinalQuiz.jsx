import './FinalQuiz.css'
import Buttons from '../Button/Buttons';
import { Link } from 'react-router-dom';

const FinalQuiz = () => {
    return(
        <div className='FinalQuiz-hero d-flex flex-column justify-content-center align-items-center'>
        <div className="FinalQuiz-box d-flex-column align-items-center mt-3">
            <div className="FinalQuiz-body d-flex flex-column align-items-center text-center mt-3">
                <div>
                <img src="./FinalImage.svg" alt="logo" />
                </div>
                <div  className='FinalQuizredirecting mt-4'>
                    Redirecting in 10 seconds...
                </div>
                <div className='FinalQuiz-Streak d-flex flex-column mt-4'>
                    <h3>Your Score</h3>
                     <h3>02</h3>
                </div>
                <div className='FinalQuizQues-ans d-flex flex-row justify-content-around'>
                    <div className='d-flex flex-column'>
                        <div  className='FinalQuizredirecting'>Total Questions</div>
                        <div>05</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='FinalQuizredirecting'>Correct Answer</div>
                        <div>02</div>
                    </div>

                </div>
                
            </div>

        </div>
        <div className='FinalQuizbutton'>
           <Link to='/Completed'>
            <Buttons bname='EXPLORE MORE'/>
            </Link>
            
        </div>

       </div>
    )
}

export default FinalQuiz;  
    
