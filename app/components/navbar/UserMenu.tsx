'use client';

import { useCallback, useState } from 'react';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <>
      <div onClick={toggleOpen} className="cursor-pointer">
        Coba click
      </div>
      {isOpen && <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">dibuka</div>}
    </>
  );
};

export default UserMenu;
