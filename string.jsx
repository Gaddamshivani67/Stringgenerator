import React, { useState, useCallback, useEffect } from "react";

export default function App() {
  const [randomString, setRandomString] = useState("");
  const [length, setLength] = useState(8);

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomString(str);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎲 Random String Generator</h1>

      <div style={{ margin: "20px" }}>
        <label>Length: </label>
        <input
          type="number"
          min="1"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <h2
        style={{
          margin: "20px",
          padding: "10px",
          border: "1px solid black",
          display: "inline-block",
          fontFamily: "monospace",
        }}
      >
        {randomString}
      </h2>

      <br />
      <button
        onClick={generateString}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Generate New String
      </button>
    </div>
  );
}
