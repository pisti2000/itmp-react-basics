const OraCard = ({ ora, index }) => {
  return (
    <article className="ora">
      <header>
        <h3>{index + 1}. óra</h3>
        <button className="icon-button">📝</button>
        <button className="icon-button">🗑️</button>
      </header>
      <h4>{ora.title}</h4>
      <p>{ora.description}</p>
    </article>
  );
};

export default OraCard;
