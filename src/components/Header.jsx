import HeaderNav from "./HeaderNav";

export default function Header() {
  let navStyle =
    "text-xl p-2 font-semibold text-slate-500 hover:text-slate-700 hover:bg-[#e3e3e3] cursor-none rounded-md";
  return (
    <>
      <div className="flex justify-between items-center p-1">
        <HeaderNav
          href="#home"
          className="text-xl p-2 font-bold text-slate-200 ml-16 hover:bg-[#e3e3e3] hover:text-slate-600 cursor-none rounded-md"
        >
          Raju Gundu
        </HeaderNav>
        <nav className="flex-1 flex space-x-6 justify-center">
          <HeaderNav href="#info" className={navStyle}>Info</HeaderNav>
          <HeaderNav href="#projects" className={navStyle}>Projects</HeaderNav>
          <HeaderNav href="#experience" className={navStyle}>Experience</HeaderNav>
        </nav>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-11/12 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
      </div>
    </>
  );
}
