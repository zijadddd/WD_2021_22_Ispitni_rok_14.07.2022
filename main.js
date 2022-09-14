document.getElementById("spoljni").innerHTML = "";

const podaci = () => {
  fetch("https://restapiexample.wrd.app.fit.ba/Ispit20210702/Get8Studenta")
    .then((res) => {
      if (!res.ok) {
        throw Error("Nesto nije ok!");
      }
      return res.json();
    })
    .then((data) => {
      let spoljni = document.getElementById("spoljni");
      let kartice = "";
      data.forEach((kartica) => {
        kartice += `
            <div class="unutrasnji">
                <h4>${kartica.imePrezime}</h4>
                <h4>${kartica.radnoMjesto}</h4>
                <h4>${kartica.opis}</h4>
                <img src="${kartica.slikaPutanja}">
                <button onclick="smjesti(${kartica.id})">Izaberi radnika</button>
            </div>
        `;
      });
      spoljni.innerHTML = kartice;
    })
    .catch((error) => {
      console.log(error);
    });
};

const smjesti = (id) => {
  document.getElementById("id").value = id;
};

const posaljiPoruku = () => {
  let ime = document.getElementById("ime").value;
  let prezime = document.getElementById("prezime").value;
  let id = document.getElementById("id").value;
  let poruka = document.getElementById("poruka").value;
  let email = document.getElementById("email").value;

  let objekat = {
    ime: ime,
    prezime: prezime,
    id: id,
    poruka: poruka,
    email: email,
  };

  alert(`${objekat.id} - ${objekat.poruka}`);
};
