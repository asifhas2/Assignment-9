import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../hooks/useTitle';

const Register = () => {
     useTitle("Register | Toy Store");
    const {createUser,error,setError,signInGoogle,updateUserProfile} = use(AuthContext);
    const handelSignInGoogle =()=>{
        console.log("clicked");
        signInGoogle()
        .then(result =>{
              toast("Login Successful");
            console.log(result.user);
        })
        .catch((error)=>{
            setError(error.message);
        })
    }

    const handelCreatUser=(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(regex.test(password)){
            setError("");
            
        }
        else{
            setError("password must be at least one lowercase,one uppercase,and minimum 6 characters");
            return;
        }
        createUser(email,password)
        .then(result =>{
            setError()
            toast("Register Successfully Done !");
            updateUserProfile(name,photo)
            .then((result)=>{
                console.log(result.user);
            })
            .catch(error =>{
                setError(error);
            })
            console.log(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })

        console.log(name,photo,email,password);

    }
    
    return (
         <div className='min-h-screen mx-auto flex justify-center items-center'>
        <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <div className="card-body">
       <form onSubmit={handelCreatUser}>
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" required />
          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="Enter your photo URL" required name='photo' />
          <label className="label">Email</label>
          <input type="email" name='email' required className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" required name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register now !</button>
          <p className='text-red-600'>{error?.message}</p>
          <p>Already have an account ? <Link to='/login' className='text-blue-500 underline'>Login Now !</Link> </p>
        </fieldset>   
       </form>

        <p className='text-center text-[20px] font-semibold'>Or</p>
        <button onClick={handelSignInGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        
        
      </div>
    </div>
    </div>
    );
};

export default Register;