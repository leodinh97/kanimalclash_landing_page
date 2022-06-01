import React from 'react'

export default function AnimationIconComponent({ number }) {
    let animationClass = number === 1 ?
                        'one' : number === 2 ?
                        'two' : number === 3 ? 
                        'three' : 'four'; 

    return (
        <div className={"animation-image animation-image-" + animationClass}>
            
        </div>
    )
}
