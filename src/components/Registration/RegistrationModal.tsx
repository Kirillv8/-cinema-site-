// import './styles/components/reg-modal-container.scss';
import { ChangeEvent, FormEvent, useState } from 'react';


const RegistrationModal = () => {
  const [valueName, setValueName] = useState('');
  const [valuePassword, setValuePassword] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (email.length < 4) {
      setEmailError('Your email must contain at least four characters.');
      return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Введите корректный e-mail.');
      return false;
    }

    setEmailError(''); 
    return true;
  };

  const validatePassword = () => {
    if (valuePassword.length < 8) {
      setPasswordError('The password must be at least eight characters long.');
      return false;
    }
    if (valuePassword.length > 30) {
      setPasswordError('The password must be no more than thirty characters long.');
      return false;
    }
    
    setPasswordError(''); 
    return true;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log(`Login: ${valueName}`);
      console.log(`Password: ${valuePassword}`);
     
    }
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setValueName(event.target.value);
  };

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(event.target.value);
  };

  return (
    <div className="reg-modal-container">
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label>Registration Form</label>
        
        <input
          type="email"
          placeholder="User email"
          onChange={handleChangeEmail}
          value={email}
        />
        {emailError && <div className="error">{emailError}</div>}

        <input
          type="text"
          placeholder="User name"
          onChange={handleChangeName}
          value={valueName}
        />

        <input
          type="password"
          placeholder="User password"
          onChange={handleChangePassword}
          value={valuePassword}
        />
        {passwordError && <div className="error">{passwordError}</div>}

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationModal;
