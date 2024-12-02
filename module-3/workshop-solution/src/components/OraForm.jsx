import { useState } from "react";

const OraForm = ({ onOraAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    const newOra = {
      id: Date.now(),
      title,
      description,
    };

    onOraAdd(newOra);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="col">
        <input
          type="text"
          placeholder="Cím"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Leírás"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <aside className="col">
        <button className="btn">Hozzáadás</button>
        {/* <button className="btn outline">Mégsem</button> */}
      </aside>
    </form>
  );
};

export default OraForm;
