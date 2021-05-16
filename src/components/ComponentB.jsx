import React from 'react'
import {useDispatch} from 'react-redux'
import {updateInput} from '../redux/actions/index'

function ComponentB() {

    const dispatch = useDispatch();

    function handleOnChange(event) {
        dispatch(updateInput(event.target.value));
    }

    return (
        <div className='compB'>
            <input 
                type="text"
                onChange={handleOnChange} 
                placeholder='Enter some text'
            />
        </div>
    )
}

export default ComponentB;