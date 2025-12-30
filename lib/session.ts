import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'admin_session';

export async function createSession() {
  cookies().set(SESSION_COOKIE_NAME, 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });
}

export async function deleteSession() {
  cookies().delete(SESSION_COOKIE_NAME);
}

export async function hasSession() {
  const session = cookies().get(SESSION_COOKIE_NAME);
  return !!session?.value;
}
