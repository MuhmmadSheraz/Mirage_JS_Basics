import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/books")
      .then((e) => e.json())
      .then((x) => setData(x));
  }, []);
  const addbook = () => {
    const bookName = prompt("Enter Book Name", 5665);
    const AuthorName = prompt("Enter Author Name", "gjkl");
    if(!bookName||!AuthorName) return false
    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({
        title: bookName,
        author: AuthorName,
      }),
    })
      .catch((err) => {
        alert(err);
      })
      .then((res) => {
        return res.json();
      })
      .then((x) => {
        console.log("Server DAta===>", x);
        setData(x);
      });
  };
  if(!data) return <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Loading...</h1>
  return (

    <div className="App">
      <div className="App-header">
        <h3>Mirage JS</h3>

        <ul>
          {data &&
            data.map((book, index) => {
              return (
                <li key={index}>
                  {book.title} ******* {book.author}{" "}
                </li>
              );
            })}
        </ul>
        <button onClick={addbook}>Add Book </button>
      </div>
    </div>
  );
}

export default App;
