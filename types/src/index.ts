export interface User {
  email: string;
  id: string;
  status?: 'Happy' | 'Sad';
  phoneNumbers: string[];
  language: LanguageCode;
  name? : string;
}

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
