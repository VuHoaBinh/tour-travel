type DialogController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type ISOString = string;

type DBTimeAudit = {
  createdAt: ISOString;
  createdBy?: number;
  updatedAt: ISOString;
  updatedBy?: number;
};

type ErrorResponse = {
  name: string;
  message: string;
};
