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
import Image from 'next/image';

const Register = () => {
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
      .post('http://127.0.0.1:8080/auth/register', data)
      .then((response) => {
        toast.success('Registered!');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Heading title="Welcome to Rampes Studio" subtitle="Create an account!" />
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
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
          <div>Already have an account?</div>
          <div onClick={() => router.push('/login')} className="text-neutral-800 cursor-pointer hover:underline">
            Login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex flex-1 justify-center items-center">
        <Form body={bodyContent} footer={footerContent} onSubmit={handleSubmit(onSubmit)} actionLabel="Sign up" disabled={isLoading} />
      </div>
      <div className="hidden flex-1 lg:flex bg-emerald-300"></div>
    </div>
  );
};

export default Register;
