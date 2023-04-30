document.querySelector(".ekle").addEventListener("click", function () {
    const gorevInp = document.querySelector(".gorev").value;
    const gorevler = document.querySelector(".gorevler");

    let gelenVeri = JSON.parse(localStorage.getItem("gorevler")) || [];
    gelenVeri.push({
        gorev: gorevInp,
        durum: false
    });
    localStorage.setItem("gorevler", JSON.stringify(gelenVeri));

    let gorevDiv = document.createElement("div");
    gorevDiv.className = "gorevDiv";

    let gorevText = document.createElement("h4");
    gorevText.innerHTML = gorevInp;

    gorevDiv.appendChild(gorevText);
    gorevler.appendChild(gorevDiv);

    gorevDiv.addEventListener("click", function () {
        if (gorevDiv.style.textDecoration === "line-through") {
            gorevDiv.style.textDecoration = "none";
            gelenVeri.forEach((element) => {
                if (element.gorev === gorevInp) {
                    element.durum = false;
                    localStorage.setItem("gorevler", JSON.stringify(gelenVeri));
                }
            });
        } else {
            gorevDiv.style.textDecoration = "line-through";
            gelenVeri.forEach((element) => {
                if (element.gorev === gorevInp) {
                    element.durum = true;
                    localStorage.setItem("gorevler", JSON.stringify(gelenVeri));
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    try {
        const gorevler = document.querySelector(".gorevler");
        let gelenVeri = JSON.parse(localStorage.getItem("gorevler"));
        console.log(gelenVeri);
        gelenVeri.forEach((element) => {
            let gorevDiv = document.createElement("div");
            gorevDiv.className = "gorevDiv";

            if (element.durum === true) {
                gorevDiv.style.textDecoration = "line-through";
            }
            
            let gorevText = document.createElement("h4");
            gorevText.innerHTML = element.gorev;

            gorevDiv.appendChild(gorevText);
            gorevler.appendChild(gorevDiv);

            gorevDiv.addEventListener("click", function () {
                if (gorevDiv.style.textDecoration === "line-through") {
                    gorevDiv.style.textDecoration = "none";
                    element.durum = false;
                    localStorage.setItem("gorevler", JSON.stringify(gelenVeri));
                } else {
                    gorevDiv.style.textDecoration = "line-through";
                    element.durum = true;
                    localStorage.setItem("gorevler", JSON.stringify(gelenVeri));
                }
            });
        });
    } 
    catch (err) {
        console.log(err);
    }
});
