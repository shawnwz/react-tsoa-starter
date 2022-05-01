export interface User {
  id: string;
  email: string;
  name? : string;
  avatar: string;
  status?: 'Happy' | 'Sad';
  phoneNumbers: string[];
  language: LanguageCode;
}

export type UserCreationParams = Pick<User, 'email' | 'name' | 'phoneNumbers'>;

export type LanguageCode =
    | 'ar'
    | 'ca'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nl'
    | 'th'
    | 'zh_cn'
    | 'zh_hk';
