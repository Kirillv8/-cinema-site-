// import './styles/components/reg-modal-container.scss';

const RegistrationModal = () => {
  return (
    <div className="reg-modal-container">
      <form id="registrationForm">
        <h1>Registration Form</h1>
        <input type="email" placeholder="User email"></input>
        <input type="text" placeholder="User name"></input>
        <input type="password" placeholder="User password"></input>
        <input type="password" placeholder="User confirm password"></input>
        <button type="button">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationModal;
