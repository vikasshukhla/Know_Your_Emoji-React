import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😂": "Laughter",
  "😊": "Smiling",
  "😔": "Sad",
  "😕": "Comfused",
  "💖": "Love With Sparkle"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops! We have a small Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know Your Emoji!</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> Emoji We know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
