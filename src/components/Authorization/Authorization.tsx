const AuthorizationModal = () => {
  return (
    <div>
      <form id="authorizationForm">
        <label>Authorization Form</label>
        <input type="text" placeholder="User name"></input>
        <input type="email" placeholder="User email"></input>
        <input type="password" placeholder="User password"></input>
        <button type="button">Авторизоваться</button>
      </form>
    </div>
  );
};

export default AuthorizationModal;
