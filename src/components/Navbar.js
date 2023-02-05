
const Navbar = ({ setchartType }) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky z-10 top-0">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">currency comparator</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("line")}
          >
            Line chart
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("pie")}
          >
            Pie Chart
          </button>
          <button
            className="mr-5 hover:text-gray-900"
            onClick={() => setchartType("bar")}
          >
            Bar chart
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
