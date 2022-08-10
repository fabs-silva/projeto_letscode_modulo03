export const fakeLogin = (username: string, password: string) => {
  console.log('Começou o login');

  if (username.length === 0 || password.length === 0) {
    console.log('Deu erro de vazio');
    return new Error('Please, fill all inputs before continue!');
  }

  if (username !== 'guest' || password !== '123456') {
    console.log('Deu erro de usuario/senha');
    return new Error('Invalid username and/or password');
  }

  console.log('Login deu certo');
  return null;
};
