import jwt from 'jsonwebtoken';

type DecodedToken = {
  guid_organization: string;
  guid_customer: string;
  exp: number;
};

export function decodeToken(token: string): DecodedToken | null {
  try {
    const decoded = jwt.decode(token) as DecodedToken;
    return decoded;
  } catch (error) {
    console.error('Error ao decodificar token:', error);
    return null;
  }
}
