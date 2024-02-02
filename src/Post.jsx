// Post.jsx
import React from "react";
import "./post.css"; // Подключаем внешний CSS-файл

const Post = ({ title, body, selectedOption }) => {
  const getPostClass = () => {
    switch (selectedOption) {
      case "HTML":
        return "post-html"; // Добавляем класс для HTML
      case "CSS":
        return "post-css"; // Добавляем класс для CSS
      case "JS":
        return "post-js"; // Добавляем класс для JS
      case "React":
        return "post-react"; // Добавляем класс для React
      default:
        return ""; // Пустой класс по умолчанию
    }
  };

  return (
    <div className={`post ${getPostClass()}`}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "8px" }}>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
