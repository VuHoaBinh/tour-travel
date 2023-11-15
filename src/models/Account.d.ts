type AccountInfoType = 'EMPLOYEE';

type AccountSexType = 'MALE' | 'FEMALE';

type AccountInfo = DBTimeAudit & {
  id: number;
  accountInfoType: AccountInfoType;
  avatar: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  adress: string;
  sex: AccountSexType;
  dateOfBirth: ISOString;
};
