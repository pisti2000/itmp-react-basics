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
