export interface UserData {
  email: string;
  name: string;
  phone: string;
  birth: string;
  street: string;
  number: string;
  cep: string;
  state: string;
  race: string;
  gender: string;
}

//Valor default do contexto
export const emptyUserData: UserData = {
  email: " ",
  name: " ",
  phone: " ",
  birth: " ",
  street: " ",
  number: " ",
  cep: " ",
  state: " ",
  race: " ",
  gender: " "
};