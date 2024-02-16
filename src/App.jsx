import Completed from "./Components/Completed/Completed"
import NewUser from "./Components/NewUser/NewUser"
import Instruction from "./Components/Instruction/Instruction"
import FinalQuiz from "./Components/FinalQuiz/FinalQuiz"
import Streak1 from "./Components/Streak1/Streak1"
import Streak2 from "./Components/Streak2/Streak2"
import Streak3 from "./Components/Streak3/Streak3"
import Streak4 from "./Components/Streak4/Streak4"
import Reward from "./Components/Reward/Reward"
import { BrowserRouter, Routes, Route} from "react-router-dom"
// import Overlay from "./Components/Overlay/Overlay"



function App() {

  return (
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element = {<Reward />} /> */}
        <Route path="/" element = {<NewUser />} />
        <Route path="/Instruction" element = {<Instruction />} />
        <Route path="/Streak1" element = {<Streak1 />} />
        <Route path="/Streak2" element = {<Streak2 />} />
        <Route path="/Streak3" element = {<Streak3 />} />
        <Route path="/Streak4" element = {<Streak4 />} />
        <Route path="/FinalQuiz" element = {<FinalQuiz />} />
        <Route path="/Completed" element = {<Completed />} />
          
          {/* <Completed /> */}
          {/* <NewUser /> */}
          {/* <Instruction /> */}
          {/* <Streak1 /> */}
          {/* <Streak2 /> */}
          {/* <Streak3 /> */}
          {/* <Streak4 /> */}
          {/* <FinalQuiz /> */}
          {/* <Overlay /> */}

        </Routes>
      </BrowserRouter>
  )
}

export default App
