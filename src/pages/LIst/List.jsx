import React, { useState } from "react";
import style from "./List.module.css";

function List() {
  const [name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [iAktive, setiAktive] = useState(false);
  const [data, setData] = useState([]);

  function hendalClick(e) {
    e.preventDefault();

    const user = {
      name: name,
      Lastname: Lastname,
      Number: Number,
      email: email,
      iAktive: iAktive,
    };
    const copid = [...data];
    copid.push(user);
    setData(copid);
    console.log(data);
  }

  return (
    <div className={style.container}>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Ism"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Familya"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Yosh"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            setiAktive(e.target.value);
          }}
        />


        <button onClick={hendalClick}>Ok</button>
      </form>

      <div>
        {data.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.selectedImage} alt="" />
              <h2>
                {value.name}
                {value.Lastname}
              </h2>
              <p>{value.email}</p>
              <p>Yoshi:{value.Number}</p>
              <p>{value.iAktive}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
