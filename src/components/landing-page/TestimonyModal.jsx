import React, { useState } from "react";
import "../../assets/styles/Testymo.css";

export default function TestimonyModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content});
    setTitle("");
    setContent("");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Your Testimony</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br/>
          <label htmlFor="testimony">Testimony:</label>
          <textarea
            id="testimony"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <br/>
          <button type="submit" id="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
