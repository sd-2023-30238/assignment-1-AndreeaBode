import React, { useState } from "react";
import axios from "axios";

function DreamCatch() {
  const [selectedFormat, setSelectedFormat] = useState("");
  const [dreamDescription, setDreamDescription] = useState("");

  const handleFormatChange = (e) => {
    setSelectedFormat(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDreamDescription(e.target.value);
  };

  const handleEvaluateDream = async () => {
    try {
      const response = await axios.get("https://example.com/my-endpoint", {
        params: {
          format: selectedFormat,
          description: dreamDescription
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>DreamCatch</h1>
      <div className="select">
        <select name="format" id="format" value={selectedFormat} onChange={handleFormatChange}>
          <option selected disabled>Selectati un tip de vise</option>
          <option value="pdf">Vise simbolice</option>
          <option value="txt">Vise compensatorii</option>
          <option value="epub">Vise legate de starea de sãnãtate</option>
          <option value="fb2">Vise legate de gãsirea solutiilor unor probleme</option>
          <option value="mobi">Vise telepatice</option>
          <option value="mobi">Vise premonitorii</option>
          <option value="mobi">Vise lucide</option>
          <option value="mobi">Cosmaruri</option>
        </select>
      </div>
      <form>
        <textarea id="subject" name="subject" placeholder="Adaugati o descriere..." style={{height: "200px"}} value={dreamDescription} onChange={handleDescriptionChange}></textarea>
      </form>
      <button className="button button4" onClick={handleEvaluateDream}>Evaluati somnul</button>
    </div>
  );
}

export default DreamCatch;
