# 2. modul workshop - Komponensek, prop-ok és állapotkezelés

- Komponens létrehozása az óra kártyának
- Órák tárolása tömbben
- Kártyák kimapelése a tömb alapján
- Teljes óraszám számláló

> [!NOTE]  
> **Cél:**  
> Az 1. modulból kiindulva hozzuk létre egy komponenst az óra kártyának. A kártyák adatait tároljuk state-ként egy tömbben, majd ezt a tömböt mapeljük ki, és jelenítsük meg ez alapján a kártyákat. A teljes óraszám számlálót is készítsük el.

<hr />

## Komponens létrehozása az óra kártyának

1. Hozz létre egy fájlt az `src/components` mappába `OraCard.jsx` néven, majd definiálj egy üres React komponenst!

   ```jsx
   const OraCard = () => {
     return <div>OraCard</div>;
   };

   export default OraCard;
   ```

2. Az `App.tsx`-ből másolj ki egy óra kártyát ebbe az új fájlba. (`<article className="ora">...</article>`)

3. Az `App.tsx`-ben definiálj state-ként egy tömböt, amiben tárolod az [assets/orak.js](./assets/orak.js) fájlban lévő előre elkészített tömböt.

<details>
<summary>Segítség: hogyan kell state-et definiálni?</summary>

**Példa:**

```jsx
import { useState } from "react";

const App = () => {
  const [stateNeve, setStateNeve] = useState("kezdőérték");

  // további kód
  // return ...
};

export default App;
```

Neked az [assets/orak.js](./assets/orak.js) fájlban levő tömböt kell betenned a `"kezdőérték"` helyett, valamint valami beszédesebb nevet adni a state-nek.

</details>

<br />

4. Az előbb elkészített tömbünk alapján dinamikusan jelenítsük meg az `OraCard` komponenseinket. Ehhez használjuk a JavaScript `.map` függvényét. A kártya prop-ként fogadja az `index`-et, valamint az `ora` objectet. Key-nek állítsuk be az óra id-jét.

<details>
<summary>Megoldás</summary>

```jsx
<section className="ora-grid">
  {orak.map((ora, index) => (
    <OraCard key={ora.id} ora={ora} index={index} />
  ))}
</section>
```

Ne felejtsük importálni az `OraCard`-ot!

```jsx
import OraCard from "./components/OraCard";
```

</details>

<br />

5. Jelenleg az `OraCard` komponensünk még semmit nem csinál a neki adott propokkal. Ezen változtassunk! Az átadott prop-ok alapján cseréljük le az óra címét, leírását, valamint azt, hogy hányadik óra (az index alapján (`index + 1`)). A megoldást [itt](./workshop-solution/src/components/OraCard.jsx) találod.

## Teljes óraszám számláló

1. Készítsünk egy új state-et az `App.tsx`-ben a teljes óraszám tárolására. A kezdőérték legyen `32`.

<details>
<summary>Megoldás</summary>

```jsx
const [teljesOraszam, setTeljesOraszam] = useState(32);
```

</details>

<br />

2. Jelenítsük meg ezen state értékét a megfelelő helyen, majd a két mellete levő gombra tegyünk egy `onClick` eseménykezelőt, amivel **növelni/csökkenteni** lehet a teljes óraszámot. Ha mindent jól csináltál, már a gombok kattintásával módosítható ez a 32-es érték.

<details>
<summary>Megoldás</summary>

```jsx
<button className="icon-button" onClick={() => setTeljesOraszam(prev => prev + 1)}>+</button>
<span className="font-semibold">{teljesOraszam}</span>
<button className="icon-button" onClick={() => setTeljesOraszam(prev => Math.max(prev - 1, 0))}>-</button>
```

</details>

<br />

3. A hiányzó órákat már ki tudjuk számolni az órák tömb hosszából és a teljes órák számából. Ezt ugyan úgy a JSX-ben elévgezhetjük kapcsos zárójelek között: `<span className="font-semibold">{teljesOraszam - orak.length}</span>`

<hr />

> [!NOTE]  
> Ha nem sikerült, a megoldást a [module-2/workshop-solution](./workshop-solution/) mappában találod.  
> Elakadás esetén fordulj a mentorodhoz!
