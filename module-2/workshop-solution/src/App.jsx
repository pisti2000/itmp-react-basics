import { useState } from "react";
import OraCard from "./components/OraCard";

const App = () => {
  const [teljesOraszam, setTeljesOraszam] = useState(32);
  const [orak, setOrak] = useState([
    {
      id: 1,
      title: "Bevezetés a webfejlesztésbe",
      description: "Weboldalak működése és HTML áttekintés.",
    },
    {
      id: 2,
      title: "Fejlesztői környezetek",
      description:
        "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása.",
    },
    {
      id: 3,
      title: "Alapvető HTML tagek",
      description: "Legfontosabb tagek használata: h1-h6, p, img, a.",
    },
    {
      id: 4,
      title: "HTML attribútumok és szövegformázás",
      description: "Attribútumok: id, class, és szövegformázás.",
    },
    {
      id: 5,
      title: "HTML listák és táblázatok",
      description: "Listaelemek (ul, ol) és táblázatok (table).",
    },
  ]);

  return (
    <main>
      <h1>Bevezetés a programozásba</h1>
      <hr />

      <section className="row">
        <div className="text-lg">Teljes óraszám:</div>
        <div className="row" style={{ gap: "0.5rem" }}>
          <button
            className="icon-button"
            onClick={() => setTeljesOraszam((prev) => prev + 1)}
          >
            +
          </button>
          <span className="font-semibold">{teljesOraszam}</span>
          <button
            className="icon-button"
            onClick={() => setTeljesOraszam((prev) => Math.max(prev - 1, 4))}
          >
            -
          </button>
        </div>
      </section>

      <section className="row">
        <div className="text-lg">Hiányzó órák:</div>
        <span className="font-semibold">{teljesOraszam - orak.length}</span>
      </section>

      <hr />

      <section style={{ padding: "0 2rem" }}>
        <button className="temakor-button">Témakörök elrejtése</button>
        <ul className="temakor-ul">
          <li>Bevezetés a webfejlesztésbe: HTML és CSS alapok</li>
          <li>
            Fejlesztői környezetek és eszközök: Visual Studio Code, Git
            használata
          </li>
          <li>
            HTML tagek és attribútumok: weboldal-struktúra és tartalom
            kialakítása
          </li>
          <li>
            CSS alapjai: formázás, színek, box modell és reszponzív design
          </li>
          <li>JavaScript alapok: változók, események, és DOM manipuláció</li>
          <li>Projektmunka: reszponzív weboldal tervezése és fejlesztése</li>
          <li>Hibakeresési technikák: fejlesztői eszközök és validáció</li>
          <li>Projektek bemutatása és értékelése</li>
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
        {orak.map((ora, index) => (
          <OraCard key={ora.id} ora={ora} index={index} />
        ))}
      </section>
    </main>
  );
};

export default App;
