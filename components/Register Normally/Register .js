import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
const Register = () => {
      toast.configure()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
      const [confirmPassword, setConfirmPassword] = useState("")
      const [state, setState] = useState(true)

       
  const handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:8000/api/Register",
      {name:name,email:email,password:password })
      .then(()=>{
        toast.success("Registered Successfully", {
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
              <label htmlFor="Name" className="text-sm text-center  my-5 font-semibold font-sans" >Name</label>
        <input type='text' name='name' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        
        />
              <label htmlFor="Email" className="text-sm text-center  my-5 font-semibold font-sans" >Email</label>
        <input type='email' name='email' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
              <label htmlFor="Password" className="text-sm text-center  my-5 font-semibold font-sans" >Password</label>
        <input type={state?'password':"text"} name='Password' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
              <label htmlFor="Confirm Password" className="text-sm text-center  my-5 font-semibold font-sans">Confirm Password</label>
              <input type={state?'password':"text"} name='confirmpassword' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input' placeholder='Enter Your Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
                    /> 
                    <div className="flex flex-row justify-center mt-3">
                          <input type="checkbox" name="" id=""className='accent-blue-500 mr-2 mt-2' onClick={() => setState(!state)}/><span >Show Password</span>
                    </div>
            <div className='inherit my-5'>
            <button onClick={handleSubmit} className='border-blue-500 border-2  m-auto border-solid hover:contrast-150 left-0 right-0  relative top-0 hover:bg-blue-500 hover:text-white cursor-pointer hover:border-0 text-blue-500 w-32 h-10 rounded-xl justify-center block mx-2 font-bold'> Register</button>
              </div>
          </div> 
      
      </>
  )
}

export default Register 