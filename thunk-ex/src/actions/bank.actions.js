//REDUX

export const withdraw = (val)=>{
    return {type:"WITHDRAW",value:val}
};

export const deposit = (val)=>{
    return {type:"DEPOSIT",value:val}
};

export const depositSync = (val)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(deposit(val))
        },5000)
    }
}

export const withdrawSync = (val)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(withdraw(val));
        },10000);
    }
};