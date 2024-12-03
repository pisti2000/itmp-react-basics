# 3. modul elméleti áttekintés és demo - Űrlap-, esemény- és haladó állapotkezelés

- Kondicionális renderelés
- Demo: "Témakörök elrejtése" gomb
- Demo: "Új óra" űrlap létrehozása
- Demo: kártya törlése

## Kondicionális renderelés

- A kondicionális renderelés azt jelenti, hogy a React dinamikusan eldönti, milyen tartalmat jelenítsen meg a képernyőn az alkalmazás állapota vagy bizonyos feltételek alapján. Ez hasonló a JavaScript if-es feltételes szerkezetéhez, csak itt a komponens visszatérési értékére van hatással.

- A kondicionális renderelés egyszerű JavaScript logikát használ, például:

  - **If-Else szerkezet**

    ```jsx
    function Greeting({ isLoggedIn }) {
      if (isLoggedIn) {
        return <h1>Üdvözlünk vissza!</h1>;
      } else {
        return <h1>Kérlek, jelentkezz be!</h1>;
      }
    }
    ```

  - **Ternary operator**

    ```jsx
    function Greeting({ isLoggedIn }) {
      return (
        <h1>{isLoggedIn ? "Üdvözlünk vissza!" : "Kérlek, jelentkezz be!"}</h1>
      );
    }
    ```

  - **Logikai operátorok**

    ```jsx
    function Warning({ showWarning }) {
      return (
        <div>{showWarning && <p>Figyelem: Valami fontos információ!</p>}</div>
      );
    }
    ```

- **Miért fontos?**
  - Dinamikus felhasználói élmény: Lehetővé teszi az interaktív funkciók létrehozását, mint például a tartalom megjelenítése vagy elrejtése.
  - Hatékonyság: Csak azt a tartalmat rendereli, ami szükséges, ezáltal javítja az alkalmazás teljesítményét.
  - Egyszerűség: Könnyű beépíteni a meglévő komponensekbe JavaScript alapvető ismereteivel.

## Demo: "Témakörök elrejtése" gomb

- Kondicionális renderelés

## Demo: „Új óra” űrlap létrehozása

## Demo: kártya törlése
