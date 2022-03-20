import React,{useState} from 'react'
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'

const Login = () => {
      toast.configure()
      const [State, setState] = useState(true)
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const handleSubmit=(e)=>{
            e.preventDefault();
            axios.post("http://localhost:8000/api/Login",
            {email:email,password:password })
            .then(()=>{
              toast.success(" Login Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
            
            }).catch(()=>{
              toast.error(" Invalid  Email or Password ", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            })
          }

      return (
      <>
           <div className="flex flex-col m-auto justify-center items-center w-9/12 mt-10 content-center   border-2 border-blue-500 rounded-md" data-aos="zoom-in-down">
            
              <label htmlFor="Email" className="text-sm text-center  my-5 font-semibold font-sans" >Email</label>
        <input type='email' name='email' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
              <label htmlFor="Passworsd" className="text-sm text-center  my-5 font-semibold font-sans" >Password</label>
                    <input type={State?"password":"text" } name='password' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
        required
                        />
                        <div className='flex flex-row mt-5'>
            <input type="checkbox" name="checkbox" className='accent-blue-500 mt-2 mr-2'onClick={() => setState(!State)} id="" /><span className='flex flex-row'>Show Password</span>
            </div>    <div className='inherit my-5'>
            <button onClick={handleSubmit} className='border-blue-500 border-2  m-auto border-solid hover:contrast-150 left-0 right-0  relative top-0 hover:bg-blue-500 hover:text-white cursor-pointer hover:border-0 text-blue-500 w-32 h-10 rounded-xl justify-center block mx-2 font-bold'> Login</button>
              </div>
          </div> 
      
      </>
  )
}

export default Login