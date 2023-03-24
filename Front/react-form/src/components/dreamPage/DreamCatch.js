import React, { useState } from "react";
import { CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";
import RequestHelper from "../requestHelper/RequestHelper";

function DreamCatch() {
  const navigate = useNavigate();

  const [format, setFormat] = useState("");
  const [description, setDescription] = useState("");

  const [stres, setStres] = useState("");
  const [energie, setEnergie] = useState("");
  const [durata, setDurata] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Selected format: ${format}`);
    console.log(`Description: ${description}`);
    // Add your logic to evaluate the sleep here
  };

  const handleChartStress = (e) => {
    e.preventDefault();

    const dream = {descriere: description, stres: stres, energie: energie, durata: durata, tag: "test tag" };
    console.log(dream);

    RequestHelper(CONFIG.SERVER_ADDRESS).POST(
      "/api/dreamService/save",
      { mode: 'no-cors', auth: null },
      dream,
      (data, error) => {
        console.log("gete")
        if (error) {
          if (error.handleable) {
            if (error.code === 500) {
              navigate("/login");
            }
          } else {
            setMessage("Error connecting to the server!");
          }
        }
      }
    );
  }


  const handleChartDuration = (e) => {
    e.preventDefault();
    const dream = { stres: stres }
    console.log(dream);
  }

  const handleChartEnergy = (e) => {
    e.preventDefault();
    const dream = { stres: stres }
    console.log(dream);
  }

  return (
    <div>
      <h1>DreamCatch</h1><br></br>
      <div className="select">
        <select name="format" id="format" value={format} onChange={(e) => setFormat(e.target.value)}>
          <option disabled>Selectati un tip de vise</option>
          <option value="pdf">Vise simbolice</option>
          <option value="txt">Vise compensatorii</option>
          <option value="epub">Vise legate de starea de sanatate</option>
          <option value="fb2">Vise legate de gãsirea solutiilor unor probleme</option>
          <option value="mobi">Vise telepatice</option>
          <option value="mobi">Vise premonitorii</option>
          <option value="mobi">Vise lucide</option>
          <option value="mobi">Cosmaruri</option>
        </select>
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <textarea
          id="subject"
          name="subject"
          placeholder="Adaugati o descriere..."
          style={{ height: "200px" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </form>
      <div className="field" >
        <input type="text" placeholder="Adaugati valoarea stresului..." onChange={(e) => { setStres(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartStress}>StresChart</button><br></br>
        <input type="text" placeholder="Adaugati valoarea energiei..." onChange={(e) => { setEnergie(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartEnergy}>EnergieChart</button><br></br>
        <input type="text" placeholder="Adaugati valoarea duratei..." onChange={(e) => { setDurata(e.target.value); }}></input>
        <button type="submit" className="button button4" onClick={handleChartDuration}>DurataChart</button><br></br>
      </div>
    </div>

  );
}

export default DreamCatch;

