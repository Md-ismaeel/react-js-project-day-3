const Navbar = () => {
  return (
    <>
      <div className="w-full h-auto fixed">
        <ul className="flex justify-around  py-3 bg-gray-400 text-white text-sm">
          <li className="active:translate-x-px">
            <a href="#" className=" bg-primary py-3 px-6 ">
              HOME
            </a>
          </li>
          <li className="active:translate-x-px">
            <a
              href="#"
              className=" py-3 px-6 hover:bg-primary active:translate-y-px"
            >
              ABOUT
            </a>
          </li>
          <li className="active:translate-x-px">
            <a
              href="#"
              className=" py-3 px-6 hover:bg-primary active:translate-y-px"
            >
              SERVICES
            </a>
          </li>
          <li className="active:translate-x-px">
            <a
              href="#"
              className=" py-3 px-6 hover:bg-primary active:translate-y-px"
            >
              FAQ
            </a>
          </li>
          <li className="active:translate-x-px">
            <a
              href="#"
              className=" py-3 px-6 hover:bg-primary active:translate-y-px"
            >
              CONTACTS
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
