fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[0].titulo;
                document.getElementById("year").innerText = data[0].ano;
                document.getElementById("sinopsis").innerText = data[0].sinopse;
            });

function switchMovie1 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[1].titulo;
                document.getElementById("year").innerText = data[1].ano;
                document.getElementById("sinopsis").innerText = data[1].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg')";
            });
}

function switchMovie2 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[2].titulo;
                document.getElementById("year").innerText = data[2].ano;
                document.getElementById("sinopsis").innerText = data[2].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/39rtAdg3yx6IDxRg0ZLXefv0aPY.jpg')";
            });
}

function switchMovie3 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[3].titulo;
                document.getElementById("year").innerText = data[3].ano;
                document.getElementById("sinopsis").innerText = data[3].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg')";
            });
}

function switchMovie4 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[4].titulo;
                document.getElementById("year").innerText = data[4].ano;
                document.getElementById("sinopsis").innerText = data[4].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg')";
            });
}

function switchMovie5 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[5].titulo;
                document.getElementById("year").innerText = data[5].ano;
                document.getElementById("sinopsis").innerText = data[5].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/6fA9nie4ROlkyZAUlgKNjGNCbHG.jpg')";
            });
}

function switchMovie6 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[6].titulo;
                document.getElementById("year").innerText = data[6].ano;
                document.getElementById("sinopsis").innerText = data[6].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/lXhgCODAbBXL5buk9yEmTpOoOgR.jpg')";
            });
}

function switchMovie7 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[7].titulo;
                document.getElementById("year").innerText = data[7].ano;
                document.getElementById("sinopsis").innerText = data[7].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg')";
            });
}

function switchMovie8 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[8].titulo;
                document.getElementById("year").innerText = data[8].ano;
                document.getElementById("sinopsis").innerText = data[8].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/7XEtHQoy1hwa8XWaOkSv3rlteea.jpg')";
            });
}

function switchMovie9 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[9].titulo;
                document.getElementById("year").innerText = data[9].ano;
                document.getElementById("sinopsis").innerText = data[9].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/7dW4BobKP5ijWCLnbhxvcogVvHs.jpg')";
            });
}

function switchMovie10 () {
    fetch("./database/db.json")
            .then(response => response.json())
            .then(data => {
                document.getElementById("movie").innerText = data[10].titulo;
                document.getElementById("year").innerText = data[10].ano;
                document.getElementById("sinopsis").innerText = data[10].sinopse;
                document.getElementById("spotlight").style.backgroundImage = "url('https://www.themoviedb.org/t/p/original/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg')";
            });
}

const slider = document.querySelector("#carouselBox");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", () => {
    isDown = true;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});

slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", () => {
    console.log(isDown);
});
