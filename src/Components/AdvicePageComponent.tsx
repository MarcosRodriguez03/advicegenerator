import React from 'react'
import '../App.css'
import pattern from '../images/pattern-divider-desktop.svg'





const AdvicePageComponent = (props: { id: number, advice: string }) => {


    return (
        <div className='d-flex justify-content-center'>


            <div className='divbox d-flex justify-content-center flex-column'>
                <p className='text1 manrope'>ADVICE #{props.id}</p>
                <p className='text2 pb-3 manrope' >"{props.advice}"</p>
                <img id='changeMe' src={pattern} alt="divider" />
            </div>
        </div>




    )
}

export default AdvicePageComponent
