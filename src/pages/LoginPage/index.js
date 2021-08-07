import './LoginPage.css';

const Login = () => {
  const _handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <h1 className='font-bold'>Login to the HR App</h1>
      <form
        onSubmit={_handleSubmit}
        className='mt-5 p-5 rounded-md shadow-xl bg-green-400'>
        <div className='form-input-group'>
          <label className='form-input-group__label' htmlFor='username'>
            Username
          </label>
          <input
            className='form-input-group__input'
            type='text'
            name='username'
            id='username'
          />
        </div>
        <div className='form-input-group'>
          <label className='form-input-group__label' htmlFor='password'>
            Password
          </label>
          <input
            className='form-input-group__input'
            type='password'
            name='password'
            id='password'
          />
        </div>
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
