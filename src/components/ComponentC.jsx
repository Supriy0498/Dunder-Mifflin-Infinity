import React from 'react'
import '../App.css';
import {useSelector} from 'react-redux'

export default function ComponentC() {

    const myState = useSelector(state => state.inputReducer.inputVal)

    return (
        <div className={myState!==''?'compC':null}>
            {myState}
        </div> 
    )
}
