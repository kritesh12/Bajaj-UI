import './Overlay.css'

const Overlay = () => {
    return (
        <div>
            <div className='Overlay-main d-flex flex-row justify-content-center align-items-center p-2'>
                <div>
                    <img src="./OverlayLock.svg" alt="logo" />
                </div>
                <div>
                    Unlocks after challenge 1
                </div>
            </div>
           
            <div className='Overlaychallenge-1 d-flex flex-row justify-content-between p-2'>
                <div className='d-flex justify-content-center border border-1'>
                    <img src="../public/big-challenge-game-icon.svg" alt="logo" />
                    </div>
                <div className='Overlayvisit d-flex flex-column justify-content-around border border-1'>
                    <div className='fw-bold ms-1'>Open My Zone</div>
                    <div className='d-flex flex-row justify-content-between'>
                        <div className='ms-1'>Lorem ipsum lorem ipsum</div>
                        <div className='Overlaycheck-now  fw-bold'>Check now</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overlay