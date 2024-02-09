import './FinalQuiz.css'
import Buttons from '../Button/Buttons';

const FinalQuiz = () => {
    return(
        <div className='FinalQuiz-hero d-flex flex-column justify-content-center align-items-center'>
        <div className="FinalQuiz-box d-flex-column align-items-center mt-3">
            <div className="FinalQuiz-body d-flex flex-column align-items-center text-center mt-3">
                <div>
                <img src="./FinalImage.svg" alt="logo" />
                </div>
                <div className='FinalQuiz-Streak  d-flex flex-column'>
                    <h3>Your Score</h3>
                     <h3>02</h3>
                </div>
                <div className='FinalQuizQues-ans d-flex flex-row justify-content-around'>
                    <div className='d-flex flex-column'>
                        <div>Total Questions</div>
                        <div>05</div>
                    </div>
                    <div className='d-flex flex-column'>
                        <div>Correct Answer</div>
                        <div>02</div>
                    </div>

                </div>
                <div>
                    <p className='mt-5'>Redirecting in 10 seconds...</p>
                </div>
            </div>

        </div>
        <div>
           
            <Buttons bname='EXPLORE MORE'/>
            
        </div>

       </div>
    )
}

export default FinalQuiz;  
    
