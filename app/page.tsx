import Image from 'next/image';
import Navbar from './components/navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center h-screen items-center">
        <h1 className="text-xl text-center ">Main Page</h1>
      </div>
    </>
  );
}
