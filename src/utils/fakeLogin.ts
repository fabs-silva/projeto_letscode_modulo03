export const fakeLogin = (username: string, password: string) => {
  if (username.length === 0 || password.length === 0) {
    console.log('Deu erro de vazio');
    return new Error('Please, fill all inputs before continue!');
  }

  if (username !== 'guest' || password !== '123456') {
    console.log('Deu erro de usuario/senha');
    return new Error('Invalid username and/or password');
  }

  return null;
};
