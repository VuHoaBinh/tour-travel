import { client } from './axios';

const login = (body: LoginBody): Promise<LoginResponse> => client.post(`/auth/login`, body);
const register = (body: RegisterBody): Promise<RegisterResponse> => client.post(`/auth/register`, body);

const authService = {
  login,
  register,
};

export default authService;
