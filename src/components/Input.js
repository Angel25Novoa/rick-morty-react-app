import React, {useState} from 'react'

const Input = ({setInput}) => {
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            className='form-control' 
                            onChange={handleInputChange} 
                            onSubmit={handleSubmit}
                        />
                    </form>
                </div>
                <p>{value}</p>
            </div>
        </div>
    </>
  )
}

export default Input