import React, { useState } from "react";
import style from "./TodoList.module.css";

function Todolist() {
  const [name, setName] = useState("");
  const [tavsif, setTavsif] = useState("");
  const [kategory, setKategory] = useState("");
  const [vseData, setVseData] = useState([]);

  const hendalClick = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      tavsif: tavsif,
      kategory: kategory,
    };
    const copid = [...vseData];
    copid.push(data);
    setVseData(copid);
    console.log(vseData);

    setName("");
    setTavsif("");
    setKategory("");
  };

  const handleDelete = (index) => {
    const nwedata = vseData.filter((value) => {
      value.index == index;
    });
    setVseData(nwedata);
  };

  return (
    <div className={style.container}>
      <form onSubmit={hendalClick} className={style.form}>
        <input
          type="text"
          placeholder="Vazifa nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Vazifa tavsifi"
          value={tavsif}
          onChange={(e) => setTavsif(e.target.value)}
        />
        <select value={kategory} onChange={(e) => setKategory(e.target.value)}>
          <option value="" disabled>
            Kategoriy
          </option>
          <option value="ish">Ish</option>
          <option value="o‘qish">O‘qish</option>
          <option value="shaxsiy">Shaxsiy</option>
        </select>
        <button type="submit">Ok</button>
      </form>
      <div className="cards">
        <h3>Vazifa  {vseData.length}</h3>
        {vseData.length > 0 &&
          vseData.map((task, index) => (
            <div key={index} className="card">
              <h2>{task.name}</h2>
              <p>{task.kategory}</p>
              <p>{task.tavsif}</p>
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Todolist;
