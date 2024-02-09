import { Link } from 'react-router-dom'
import './Reward.css'


const Reward = () => {
    return (
        <div>

<div>
    <div className="rewardhero text-white d-flex flex-column align-items-center">
      <div className="rewardStreak mt-5 font-weight-bold">
        Let's play "Streak" now
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <img src="./Small-star.png" alt="logo" className="small-star d-flex align-items-end" />
      <div className="rewardimage mt-5 d-flex justify-content-center align-items-center">
        <img src="./Bimage.png" alt="nLogo" />
      </div>
      </div>
      <div className="rewardRules-play d-flex align-items-end justify-content-center">
      <div className="rewardRules mt-5">
        Rules of Play
      </div>
      <img src="./Big-star.png" alt="logo" className="big-star" />
      </div>
      <div className="rewardstars d-flex flex-column mt-5 p-3">
        <div className="blue-star d-flex flex-row">
          <div className=" d-flex flex-row justify-content-between align-items-center">
            <img src="./b-star.png" alt="logo" />
            </div>
          <div>You can only complete one activity in a day</div>
        </div>
        <div className="purple-star d-flex flex-row align-items-center">
          <div>
            <img src="./p-star.svg" alt="logo" />
          </div>
          <div>You can take step 2 only after completing step 1</div>
        </div>
        <div className="green-star d-flex flex-row align-items-center">
          <div>
            <img src="./g-star.svg" alt="logo" />
          </div>
          <div>You will be eligible for rewards when you complete all the challenges in the given time</div>
        </div>
      </div>
      </div>
<div>
      <div className="rewardfoot d-flex flex-column align-items-center">
        
        <div className="rewardbutton d-flex justify-content-center mt-3 align-items-center"><Link to="/NewUser">PLAY NOW</Link></div>
        <div className="rewardtext-black mb-4 ">By proceeding, you agree to the<span className="rewardterms"> Terms & Conditions</span> of Bajaj Finance Ltd.</div>
        </div>
      </div>
      </div>
    
<link rel="stylesheet" href="" />
        </div>
    )
}

export default Reward