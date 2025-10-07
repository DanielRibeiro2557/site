var n = 1;
var oi = false;

if (oi) {
    const div1 = document.createElement("div");
    for (let i = 0; i < 10; i++) {
        const img = document.createElement("img");
        img.src = "../midia/img/16x8-1.png";
        img.alt = "tijolo";
        div1.append(img);
    }
    div1.className = "dentro tipo-2";
    document.getElementById("linha").appendChild(div1)
}

for (let i = 0; i < n; i++) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    for (let i = 0; i < 10; i++) {
        const img = document.createElement("img");
        img.src = "../midia/img/16x8-1.png";
        img.alt = "tijolo";
        div1.append(img);
    }
    const imga = document.createElement("img");
    imga.src = "../midia/img/8x8-1.png";
    imga.alt = "tijolinho";
    imga.className = "tijolinho";
    div2.append(imga)
    for (let i = 0; i < 9; i++) {
        const img = document.createElement("img");
        img.src = "../midia/img/16x8-1.png";
        img.alt = "tijolo";
        div2.append(img);
    }
    const imgb = document.createElement("img");
    imgb.src = "../midia/img/8x8-1.png";
    imgb.alt = "tijolinho";
    imgb.className = "tijolinho";
    div2.append(imgb)
    div1.className = "dentro tipo-2";
    div2.className = "dentro tipo-2";
    document.getElementById("linha").appendChild(div2, div1);
    document.getElementById("linha").appendChild(div1)
}