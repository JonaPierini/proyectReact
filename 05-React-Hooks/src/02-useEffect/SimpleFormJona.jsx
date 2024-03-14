import {useState} from 'react'

export const SimpleFormJona = () => {

    const [state, setState] = useState({
        name: '',
        email: ''
    })

    const handleForm = (e) =>{
        if(e.target.name == 'user'){
            setState({
                ...state,
                name: e.target.value
            })
        } if(e.target.name == 'email'){
            setState({
                ...state,
                email: e.target.value
            })
        }
    }

    // const handleName = (e) =>{
    //     setName(e.target.value)
    // }


  return (
    <>
        <h1>Simple Form Jona</h1>
        <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                // value={name}
                // onChange={handleName}
                value={state.name}
                onChange={handleForm}
                name='user'
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                value={state.email}
                onChange={handleForm}
                name='email'
            />
    </>
  )
}
