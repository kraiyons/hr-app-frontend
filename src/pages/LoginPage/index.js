import './LoginPage.css';
import TextField from '../../components/TextField';

const Login = () => {
  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <div className='page-wrapper '>
      <h1 className='font-bold'>Login to the HR App</h1>
      <form onSubmit={_handleSubmit} className='form-wrapper'>
        <TextField name='username' placeholder='user@email.com' type='text' />
        <TextField name='password' placeholder='******' type='password' />
        <div className='form-footer'>
          <button type='submit' className='w-full'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
