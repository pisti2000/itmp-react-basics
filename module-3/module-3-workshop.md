# 3. modul workshop - Űrlap-, esemény- és haladó állapotkezelés

- "Témakörök elrejtése" gomb létrehozása
- "Új óra" űrlap létrehozása
- Kártya törlése

> [!NOTE]  
> **Cél:**  
> A 2. modulból kiindulva készítsük el a "Témakörök elrejtése" gomb funkcionalitását, valamint az űrlapot új óra létrehozására. Az óra törlése gombot is készítsük el.

<hr />

## "Témakörök elrejtése" gomb létrehozása

1. Hozzunk létre egy state-et `temakorokShown` névvel. Ez egy `boolean` state lesz, aminek a kezdőértéke legyen `true`.

2. Kondícionális rendereléssel oldjuk meg azt, hogy csak akkor látszódjanak a témakörök (`<ul className="temakor-ul">...</ul>`), ha ez a state igaz.

<details>
<summary>Segítség: kondícionális renderelés (&&)</summary>

```jsx
<div>{showHello && "Szia, ITMP!"}</div>
```

</details>

3. Szintén kondícionális rendereléssel oldjuk meg azt, hogy a gomb a `"Témakörök elrejtése"` és a `"Témakörök megjelenítése"` értékek között váltakozzon a state értékének megfelelően. (ha `temakorokShown` igaz, akkor `"Témakörök elrejtése"`, különben `"Témakörök megjelenítése"`)

<details>
<summary>Segítség: kondícionális renderelés (ternary operator)</summary>

```jsx
<div>{showHello ? "Szia, ITMP!" : "Nincs üdvözlés!"}</div>
```

</details>

4. A `"Témakörök elrejtése"` gombra való kattintással változtassuk a `temakorokShown` state értékét az ellenkezőjére. Mivel ez egy boolean, simán negálni tudjuk. (`!temakorokShown`)

<details>
<summary>Megoldás</summary>

```jsx
<section style={{ padding: "0 2rem" }}>
  <button
    className="temakor-button"
    onClick={() => setTemakorokShown((prev) => !prev)}
  >
    {temakorokShown ? "Témakörök elrejtése" : "Témakörök megjelenítése"}
  </button>
  {temakorokShown && (
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
  )}
</section>
```

</details>

<br />

## "Új óra" űrlap létrehozása

1. Hozz létre egy komponenst az `src/components` mappába `OraForm` néven. Helyezzük át az `App.tsx`-ben lévő form-ot ebbe a komponensbe. A "Mégsem" gombra nem lesz szükség még, ezt kommenteljük ki. Az `App.tsx`-ben a form helyére helyezzük be ezt a komponenst: `<OraForm />`. Ne fe felejstük el beimportálni!

2. Definiálj két state változót: `title`, `description`. Oldjuk meg azt, hogyha az inputon változtatunk, akkor mentsük el az input értékét a megfelelő state-ben. Ehhez használjuk az `onChange` eseménykezelőt. Ne felejtsük value-ként átadni a state értékét az inputnak!

<details>
<summary>Megoldás</summary>

```jsx
import { useState } from "react";

const OraForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form action="#">
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
```

</details>

<br />

3. Hozz létre egy függvényt `handleFormSubmit` néven az `OraForm` komponensben (a komponensen belül, a state-ek alatt).  
   Ezt a függvényt add át a `form` `onSubmit` eseménykezelőjének. Az `action` attribútum nem kell.  
   Ez a függvény egy `event` paramétert fog fogadni. Akadályozd meg a form alapértelmezett viselkedését.  
   A `title` és `description` state-ek alapján hozz létre egy `newOra` változót ebben a függbényben. Kapjon még egy egyedi id-t is a `Date.now()` függvényt használva, `id` néven.

4. A komponens majd egy `onOraAdd` nevű prop-ot fog fogadni, ami egy függvény lesz, egy paraméterrel: az új óra.  
   Erre készülj fel úgy, hogy fogadd ezt a prop-ot, majd az új `handleFormSubmit` függvényben hívd meg ezt a függvényt. A `newOra` változó legyen átadva első paraméterként. Tehát a `handleFormSubmit` függvény utolsó sora ez lesz: `onOraAdd(newOra);`

A megoldást [itt](./workshop-solution/src/components/OraForm.jsx) találod, hogyha elakadnál. A mentorod segítségét is bátran kérheted.

5. Az `App.tsx`-ben add át az `onOraAdd` prop-ot az `OraForm` komponensnek. Ez legyen egy callback, ami fogadja a `newOra` változót, és `setState` hívással hozzáadja az új órát a meglévő óráinkhoz. Használd az array spreading operátort: `[...myArray, "newValue"]`

<details>
<summary>Megoldás</summary>

```jsx
<OraForm onOraAdd={(newOra) => setOrak((prev) => [...prev, newOra])} />
```

</details>

<br />

6. Ha mindent jól csináltál, akkor működik a form. Viszont ahogy látod, hozzáadás után nem törli az `input`-ok értékét, ez nem a legjobb felhasználói élmény. Ezt szorgalmi feladat megoldani!

> [!NOTE]  
> Ha nem sikerült, a megoldást a [module-3/workshop-solution](./workshop-solution/) mappában találod.  
> Elakadás esetén fordulj a mentorodhoz!
