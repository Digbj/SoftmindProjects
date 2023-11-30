import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [toggle, setToggle] = useState(true)
    const [nav,setNav]=useState(false)
    const [reg, setReg] = useState({
        rname: '',
        remail: '',
        rpassword: '',
        cpassword: '',
    })
    const [login, setLogin] = useState({
        uname: '',
        upassword: '',
    })
    const [msg1, setMsg1] = useState("")
    const [msg, setMsg] = useState("")
    const HandleLogin = () => {
        console.log(login)
        if (!login.uname || !login.upassword) {
            setMsg1("Enter all the Details")
        } else if (login.uname && login.upassword === "12345") {
            setMsg1("")
            setMsg1('Login Successful')
            setNav(true)
          
            
        } else {
            setMsg1("Credential Did'nt matched")
        }
    }

    if(nav){
        return <Navigate to='/home'/>
        
    }
    const HandleReg = () => {
        console.log(reg)
        if (!reg.rname || !reg.rpassword || !reg.cpassword) {
            setMsg("Enter all the Credentials")
        } else if (!reg.remail) {
            setMsg("Email Required")
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(reg.remail)) {
            setMsg("Not a Valid Email ID")
        }
        else if (reg.rname && reg.remail && reg.rpassword === reg.cpassword) {
            setMsg("Registration Successful")
            setToggle(true)

        }
        else if (reg.rpassword !== reg.cpassword) {
            setMsg("Password did not match")
        }

    }
    return (
        <div className="container">
            {toggle ? <div className='login'>
                <h3>Login</h3>
                <div className='main'>
                    <div className='inp'>
                        <input placeholder='User ID' onBlur={(e) => { setLogin({ ...login, uname: e.target.value }) }} />
                        <input type='password' placeholder='Password' onBlur={(e) => { setLogin({ ...login, upassword: e.target.value }) }} />
                    </div>

                    <p className='for'>Forgot Password?</p>
                    <div><button onClick={HandleLogin}>Login</button></div>

                    <div><p>New User Register <span className='tog' onClick={() => { setToggle(false) }}>Here</span></p></div>
                    <div className='msg'>{msg1}</div>
                </div>
            </div> : <div className='login'>
                <h3>Registration</h3>
                <div className='main'>
                    <div className='inp'>
                        <input placeholder='User Name' onBlur={(e) => { setReg({ ...reg, rname: e.target.value }) }} />
                        <input type='email' placeholder='Email ID' onBlur={(e) => { setReg({ ...reg, remail: e.target.value }) }} />
                        <input type='password' placeholder='Password' onBlur={(e) => { setReg({ ...reg, rpassword: e.target.value }) }} />
                        <input type='password' placeholder='Confirm-Password' onBlur={(e) => { setReg({ ...reg, cpassword: e.target.value }) }} />
                    </div>
                    <div><button onClick={HandleReg}>Register</button></div>

                    <div><p>Click <span className='tog' onClick={() => { setToggle(true) }}> Here</span> To Login</p></div>
                    <div className='msg'>{msg}</div>
                </div>
            </div>
            }
        </div>
    )
}
export default Login;