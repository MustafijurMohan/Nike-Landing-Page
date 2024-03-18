import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/"><img src={headerLogo} alt="Logo" width='129' height='29' /></a>

          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}><a href={item.href} className="font-montserrat text-lg leading-normal text-slate-gray">{item.label}</a></li>
            ))}
          </ul>
          <div className="flex gap-2 font-montserrat font-medium text-lg leading-normal max-lg:hidden wide:mr-24">
            <a href="/">Sign in</a>
            <span>/</span>
            <a href="/">Explore now</a>
          </div>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width='25' height='25' />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
