import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const user = axios.post('http://127.0.0.1:8000/auth/register', {
    email,
    name,
    password,
  });

  return NextResponse.json(user);
}
