import './LoginPage.css';

const Login = () => {
  const _handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div class='w-full h-full flex justify-center items-center'>
      <form onSubmit={_handleSubmit}>
        <div class='form-input-group'>
          <label class='form-input-group__label' htmlFor='username'>
            Username
          </label>
          <input
            class='form-input-group__input'
            type='text'
            name='username'
            id='username'
          />
        </div>
        <div class='form-input-group'>
          <label class='form-input-group__label' htmlFor='password'>
            Password
          </label>
          <input
            class='form-input-group__input'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <div class='form-footer'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
