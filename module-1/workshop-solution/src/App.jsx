const App = () => {
  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr />

      <section className="row">
        <div className="text-lg">Teljes óraszám:</div>
        <div className="row" style={{ gap: "0.5rem" }}>
          <button className="icon-button">+</button>
          <span className="font-semibold">32</span>
          <button className="icon-button">-</button>
        </div>
      </section>

      <section className="row">
        <div className="text-lg">Hiányzó órák:</div>
        <span className="font-semibold">29</span>
      </section>

      <hr />

      <section style={{ padding: "0 2rem" }}>
        <button className="temakor-button">Témakörök elrejtése</button>
        <ul className="temakor-ul">
          <li>Algoritmusok alapjai</li>
          <li>Változók és adattípusok</li>
          <li>Feltételes elágazások</li>
          <li>Ciklusok</li>
          <li>Függvények</li>
          <li>Adatszerkezetek (tömbök, listák)</li>
          <li>Hibakezelés alapjai</li>
          <li>Be- és kimeneti műveletek</li>
        </ul>
      </section>

      <hr />

      <form action="#">
        <div className="col">
          <input type="text" placeholder="Cím" />
          <textarea placeholder="Leírás" rows="5"></textarea>
        </div>
        <aside className="col">
          <button className="btn">Hozzáadás</button>
          <button className="btn outline">Mégsem</button>
        </aside>
      </form>

      <section className="ora-grid">
        <article className="ora">
          <header>
            <h3>1. óra</h3>
            <button className="icon-button">📝</button>
            <button className="icon-button">🗑️</button>
          </header>
          <h4>Algoritmusok alapjai</h4>
          <p>
            Az algoritmusok alapjai, az algoritmusok jellemzői, az algoritmusok
            felépítése, az algoritmusok leírása, az algoritmusok jelölése,
            algoritmusok példák.
          </p>
        </article>
      </section>
    </main>
  );
};

export default App;
