import React from 'react'

const Welcome = () => {
  return (
    <div>
        <div className='bg-cover bg-image d-flex'>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col text-end'>
                        <button type='button'className='btn' style={{color:'white', border:'none'}}>Login</button>
                        <button type='button'className='btn btn-outline-light' style={{backgroundColor: 'transparent', color:'white',':hover':{backgroundColor:'transparent'}}}>Create an account</button>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col d-flex justify-content-center'>
                        <div className='text-danger circle'>
                            <h1 className='logo'>e!</h1>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col d-flex justify-content-center'>
                        <h1 className='text-light line'>Find the best restaurants, cafés, and bars</h1>
                    </div>
                </div>
                <div className='row mt-3 d-flex justify-content-center'>
                    <div className='col selectbar'>
                        <select className='form-control input1 py-2'>
                            <option value="0" disabled>Please type a location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className='col input-group searchbar'>
                        <i className='input-group-text bi bi-search'></i>
                        <input type="text" className='form-control input2 py-2' placeholder='Search for restaurants' />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Welcome