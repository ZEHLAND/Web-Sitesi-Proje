const girisFormu = document.getElementById("giris-formu");
const girisButonu = document.getElementById("giris-formu-kaydet");

girisButonu.addEventListener("click", (e) => {
    e.preventDefault();

    const kullaniciadi = girisFormu.kullaniciadi.value;
    const parola = girisFormu.parola.value;

    if (kullaniciadi == "zehra" && parola == "1234") {
        alert("Giris Basarili...");
        window.location = "AnaSayfa.html";
    }
    else {
        alert("Giris Basarisiz!!");
    }
})