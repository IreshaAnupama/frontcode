import React from 'react'

function InputBoxContact ({type,name}) {

  const handleInputChange=() =>{

    }
  return(
    
    <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type={type}
                              className="form-control"
                              name={name}
                              placeholder={name}
                              onChange={handleInputChange} />
                          </div>
                        </div>
  )
}

export default InputBoxContact;
  