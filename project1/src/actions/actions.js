

export const ageUp = ()=>{
    return {type:"AGE_UP",value:1}
}


export const ageUpSync = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(ageUp());
        },5000);
    }
}



export const ageDown = ()=>{
    return {type:"AGE_DOWN",value:1}
}


export const ageDownSync = ()=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(ageDown());
        },5000);
    }
}
