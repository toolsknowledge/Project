//read the action and modify the action , fire the new action to reducer

import { takeLatest,put } from "redux-saga/effects";

export function *modifyAmt(action){
    yield put({type:"WITHDRAW_GST",value:action.value+(action.value*0.18)})
};


export function *withdraw(action){
    yield takeLatest("WITHDRAW",modifyAmt);
}