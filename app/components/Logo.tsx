'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter;

  return (
    <h1 className="cursor-pointer text-4xl font-bold">
      rampes<span className="text-green-700">.</span>
    </h1>
  );
};

export default Logo;
