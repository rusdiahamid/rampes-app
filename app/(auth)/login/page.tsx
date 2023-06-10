'use client';

import { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Heading from '@/app/components/Heading';
import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import Form from '@/app/components/Form';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { setCookie } from 'nookies';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('http://127.0.0.1:8080/auth/login', data)
      .then((response) => {
        toast.success('Logged in');
        console.log(response.data.authentication);
        setCookie(null, 'RAMPES-SESSION', JSON.stringify(response.data.authentication.sessionToken), {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        router.push('/dashboard');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Heading title="Welcome back" subtitle="Please enter your details." />
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
      <Button outline label="Continue with Facebook" icon={AiFillFacebook} onClick={() => {}} />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <div>Don &apos t have an account?</div>
          <div onClick={() => router.push('/register')} className="text-neutral-800 cursor-pointer hover:underline">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-1 justify-center items-center">
        <Form body={bodyContent} footer={footerContent} onSubmit={handleSubmit(onSubmit)} actionLabel="Sign in" disabled={isLoading} />
      </div>
      <div className="hidden flex-1 lg:flex bg-blue-600"></div>
    </div>
  );
};

export default Login;
