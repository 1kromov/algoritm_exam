// // Window.jsx
// import React, { useState, useEffect } from "react";
// import axios from "@/service/axios";
// import Post from "./Post";
// import Footer from "./Footer";
// const Window = ({ selectedOption }) => {
//   const [allPosts, setAllPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchAllPosts = async () => {
//       try {
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         if (response.status === 200) {
//           setAllPosts(response.data);
//           setIsLoading(false);
//         }
//       } catch (error) {
//         console.log(error);
//         setIsLoading(false);
//       }
//     };

//     fetchAllPosts();
//   }, []);

//   const displayedPosts = allPosts.slice(0, 10); // Display the first 10 posts

//   return (
//     <div className="container flex-1 overflow-x-auto p-4 mt-24 max-h-[600px]">
//       <div className="container mx-auto">
//         <h2 className="text-2xl font-bold text-center mb-4">All Posts</h2>
//         <div className="text-red-50">
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <div>
//               {displayedPosts.map((post) => (
//                 <Post
//                   key={post.id}
//                   title={post.title}
//                   body={post.body}
//                   selectedOption={selectedOption}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//         {allPosts.length > 10 && (
//           <div className="text-red-50">
//             {allPosts.slice(10).map((post) => (
//               <Post
//                 key={post.id}
//                 title={post.title}
//                 body={post.body}
//                 selectedOption={selectedOption}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer onSubmit={() => console.log("Submit clicked")} />
//     </div>
//   );
// };

// export default Window;

import React, { useState, useEffect, useRef } from "react";
import axios from "@/service/axios";
import Post from "./Post";
import Footer from "./Footer";

const Window = ({ selectedOption }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.status === 200) {
          setAllPosts(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  const displayedPosts = allPosts.slice(0, 10);

  return (
    <div
      className="container flex-1 overflow-x-auto p-4 mt-24 max-h-[600px]"
      ref={containerRef}
    >
      <div className="container mx-auto ">
        <h2 className="text-2xl font-bold text-center mb-4">All Posts</h2>
        <div className="text-red-50">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {displayedPosts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  selectedOption={selectedOption}
                />
              ))}
            </div>
          )}
        </div>
        {allPosts.length > 10 && (
          <div className="text-red-50">
            {allPosts.slice(10).map((post) => (
              <Post
                key={post.id}
                title={post.title}
                body={post.body}
                selectedOption={selectedOption}
              />
            ))}
          </div>
        )}
      </div>
      <Footer onSubmit={() => console.log("Кнопка отправки нажата")} />
    </div>
  );
};

export default Window;
