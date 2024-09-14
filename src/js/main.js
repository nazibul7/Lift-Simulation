const liftContainer=document.querySelector('.lift__container')
liftContainer.addEventListener('click',()=>{
    console.log(liftContainer.getBoundingClientRect());
    
})
const lift=document.querySelector('.lift__box')

const buttons=document.querySelectorAll('.btn')

const upBtn=document.querySelector('.up')
const downBtn=document.querySelector('.down')

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        const floor=button.textContent
        moveLift(floor)
    })
})

const moveLift=(floor)=>{
    lift.classList.remove('ground_floor','first_floor','second_floor','third_floor')
    if(floor==0){
        lift.classList.add('ground_floor')
        console.log(lift);
        
    }else if(floor==1){
        lift.classList.add('first_floor')
        console.log(lift);
        
    }
    else if(floor==2){
        lift.classList.add('second_floor')
        console.log(lift);
        
    }
    else if(floor==3){
        lift.classList.add('third_floor')
        console.log(lift);
        
    }
}

