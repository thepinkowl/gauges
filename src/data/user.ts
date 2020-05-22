export interface User {
  name: string;
}

let user: User = {
  name: ''
};

export const getUser = () => user;

export const saveUser = (u: User) => {
  user = u;
}
