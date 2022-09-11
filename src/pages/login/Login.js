import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { ECDContext } from "../../GlobalContext";
import "./login.scss";

export default function Login() {
  const ecdContext = useContext(ECDContext);
  const [empId, setEmpId] = useState("");
  const { signIn, isLoggedIn } = ecdContext;
  const loginMethod = (e) => {
    e.preventDefault();
    if (empId) {
      signIn(empId);
    }
  };
  if (isLoggedIn()) {
    return <Redirect to='/home' />;
  }
  return (
    <div className='w-100 m-auto form-signin text-center'>
      <form onSubmit={loginMethod}>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating mb-3'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='Please enter six digit emp id'
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
          <label htmlFor='floatingInput'>Employee ID</label>
        </div>
        <button className='w-100 btn btn-lg btn-info' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
}
