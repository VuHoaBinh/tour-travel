type LoginBody = {
  username: string;
  password: string;
};

type LoginResponse = DBTimeAudit & {
  token: string;
  id: number;
  isAdmin: boolean;
  username: string;
  accountInfo: AccountInfo;
};

type ProfileType = {
  isLoggedIn?: boolean;
  accessToken?: string;
  id?: number;
  isAdmin?: boolean;
  username?: string;
  accountInfo?: AccountInfo;
};

type RegisterBody = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  adress: string;
  sex: AccountSexType;
  dateOfBirth: ISOString;
};

type RegisterResponse = LoginResponse;
