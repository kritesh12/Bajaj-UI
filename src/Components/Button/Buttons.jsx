import './Buttons.css'

const Buttons = (props) => {
    return(
        <div className='button mt-3 d-flex align-items-center justify-content-center'>
            {props.bname}

        </div>
    )
}

export default Buttons