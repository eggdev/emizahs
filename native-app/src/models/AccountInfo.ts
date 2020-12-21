export interface AccountInfo {
  user: string;
  authorizationCode: string;
  state: string;
  identityToken: string;
  fullName: {
    nickname: string;
    phoneticRepresentation: {};
    middleName: string;
    familyName: string;
    namePrefix: string;
    givenName: string;
    nameSuffix: string;
  },
  email: string;
}

export const DefaultAccountInfo = {
  user: '',
  authorizationCode: '',
  state: '',
  identityToken: '',
  fullName: {
    nickname: '',
    phoneticRepresentation: {},
    middleName: '',
    familyName: '',
    namePrefix: '',
    givenName: '',
    nameSuffix: '',
  },
  email: '',
}