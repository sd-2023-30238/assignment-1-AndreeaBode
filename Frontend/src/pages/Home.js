import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [format, setFormat] = useState("");
  const [description, setDescription] = useState("");

  const [stress, setStress] = useState("");
  const [energy, setEnergie] = useState("");
  const [duration, setDurata] = useState("");
  const [message, setMessage] = useState("");
  const [dream, setDream] = useState({
    descriere:"des",
    stres:"st",
    energie:"st",
    durata:"sts",
    tag: "test tag" ,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected format: ${format}`);
    console.log(`Description: ${description}`);
    // Add your logic to evaluate the sleep here
  };
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  const handleChartStress = async (e) => {
    e.preventDefault();
    console.log(e);
    const dream = {
      descriere:description,
      stres:stress,
      energie:energy,
      durata:duration,
      tag: format,
    };
    console.log(dream);
    await axios.post("http://localhost:8080/api/dreamService/save", dream);
    navigate("/");
  };
  const handleChartDuration = (e) => {
    e.preventDefault();
    const dream = { durata:duration }
    console.log(dream);
  }
  const handleChartStressN = (e) => {
    e.preventDefault();
    const dream = { stres:stress }
    console.log(dream);
  }


  const handleChartEnergy = (e) => {
    e.preventDefault();
    const dream = { energie:energy }
    console.log(dream);
  }


  return (
    <div>
     <br></br><br></br>
      <div className="select">
        <select name="format" id="format" value={format} onChange={(e) => setFormat(e.target.value)}>
          <option disabled>Selectati un tip de vise</option>
          <option value="Vise simbolice">Vise simbolice</option>
          <option value="Vise compensatorii">Vise compensatorii</option>
          <option value="Vise legate de starea de sanatate">Vise legate de starea de sanatate</option>
          <option value="Vise legate de gasirea solutiilor unor probleme">Vise legate de gasirea solutiilor unor probleme</option>
          <option value="Vise telepatice">Vise telepatice</option>
          <option value="Vise premonitorii">Vise premonitorii</option>
          <option value="Vise lucide">Vise lucide</option>
          <option value="Cosmaruri">Cosmaruri</option>
          <option value="Fara vise">Fara vise</option>
        </select>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <textarea
          id="subject"
          name="subject"
          placeholder="Adaugati o descriere..."
          style={{ height: "200px" }}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
      <div className="field" >
        <input type="text" placeholder="Adaugati valoarea stresului[1-5]..." onChange={(e) => { setStress(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartStressN}>StresChart</button><br></br>
        <input type="text" placeholder="Adaugati valoarea energiei[1-5]..." onChange={(e) => { setEnergie(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartEnergy}>EnergieChart</button><br></br>
        <input type="text" placeholder="Adaugati valoarea duratei[1-5]..." onChange={(e) => { setDurata(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartDuration}>DurataChart</button><br></br>
        <small>Valorile introduse trebuie sa fie numere din intervalul [1-5], altfel nu vor fi luate de catre sistem!</small><br></br>
        <button type="submit" className="button button4" onClick={handleChartStress}>Submit</button><br></br>
      </div>
    </div>

  );
}
