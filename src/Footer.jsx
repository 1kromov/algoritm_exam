// // Footer.jsx
// import React from "react";

// const Footer = ({ onSubmit }) => {
//   return (
//     <div className="flex justify-end mt-4">
//       <button
//         onClick={onSubmit} // Add your submit function here
//         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Footer;

// Footer.jsx
import React from "react";

const Footer = ({ onSubmit }) => {
  return (
    <div className="flex justify-end mt-4">
      <button
        onClick={onSubmit} // Добавьте вашу функцию отправки здесь
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default Footer;
