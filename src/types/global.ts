export interface Address {
  email: string;
  password: string;
  name: string;
  passwordConfirm: string;
  cpf: number | string;
  phone: number | string;
  street: string;
  number: number | string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  cep: number | string;
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

export interface AuthContextData {
  authData?: AuthData;
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}