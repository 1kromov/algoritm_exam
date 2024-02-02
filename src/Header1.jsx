// Header.jsx
const Header = () => {
  const date = new Date();
  return (
    <div className="bg-[#20294d] text-white fixed h-[80px] w-full p-4">
      <div className="flex justify-center items-center h-full">
        {" "}
        {/* Center-align and vertically align the content */}
        <div className="text-center">
          <h1 className="text-yellow-400 font-semibold text-[28px]">
            Algoritm Exam
          </h1>
          {/* <h2 className="font-semibold text-yellow-400 text-[20px]">Exam</h2> */}
        </div>
      </div>
      <p className="text-yellow-400 text-end -mt-6">
        {" "}
        {/* Adjusted margin for date alignment */}
        {`Today is ${new Date().toDateString()}`}
      </p>
    </div>
  );
};

export default Header;
