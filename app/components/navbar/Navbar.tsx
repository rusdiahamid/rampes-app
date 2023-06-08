import Link from 'next/link';
import Container from '../Container';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="border-b-[1px]">
        <Container>
          <div className="navbar bg-base-100 static top-0">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <a>Portofolio</a>
                  </li>
                  <li>
                    <a>Katalog</a>
                    <ul className="p-2">
                      <li>
                        <a>Pernikahan</a>
                      </li>
                      <li>
                        <a>Ulang Tahun</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Tentang</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl">rampes.</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>Portofolio</a>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Katalog</summary>
                    <ul className="p-2">
                      <li>
                        <a>Pernikahan</a>
                      </li>
                      <li>
                        <a>Ulang Tahun</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a>Tentang</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <Link href={'/login'} className="">
                Masuk
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
