/*
constantes e variaveis iniciais na ordem:
Numero de tijolos
Numero na casa das desenas dos tijolos
Se o numero de linhas é impar
Tijolo inteiro
Meio tijolo
*/
var nTijolos = 20
var n = Math.floor(nTijolos/10);
var isOddLines = false;
const src16 = '../midia/img/16x8-1.png';
const src8 = '../midia/img/8x8-1.png';


if (nTijolos%10 == 0) {
    //se o numero de tijolos for divizivel por 10 execute essa funcao
    tijo();
}
else{
    //se nao
    if (nTijolos < 10) {
        // se o numero de tijolos for menor que 10 execute essa outra função
        tijinjo();
    }
    else{
        // se nao subtraia a desena dos tijolos pelo numero de tijolos e execute essas duas funções
        /*
        exemplo:
            se o numero de tijolos for igual a 27
            então n vai ser igual a 2
            multiplica n * 10, ou seja 2 * 10
            e subtrai esse resultado do numero de tijolos
            ficando assim 27 - 20 = 7
            então o numero de tijolos passa a ser considerado 7
        */
        nTijolos -= n*10;
        tijinjo();
        tijo();
    }    
}
//ccontinuar comentando a partir daqui
function tijo() {
    if (n%2 == 0) {
        isOddLines = false;
    }
    else{
        isOddLines = true;
    }
    if (isOddLines) {
        const div1 = document.createElement("div");
        stackTijo(10, src16, 'tijolo', div1, 'tijolo')
        div1.className = "dentro tipo-2";
        document.getElementById("linha").appendChild(div1)
    }

    if (n != 1) {
        if (n%2 != 0) {
            n -= 1;
        }
        for (let i = 0; i < n/2; i++) {
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            stackTijo(10, src16, 'tijolo', div1, 'tijolo')
            const imga = document.createElement("img");
            imga.src = src8;
            imga.alt = "tijolinho";
            imga.className = "tijolinho";
            div2.append(imga)
            stackTijo(9, src16, 'tijolo', div2, 'tijolo')
            const imgb = document.createElement("img");
            imgb.src = src8;
            imgb.alt = "tijolinho";
            imgb.className = "tijolinho";
            div2.append(imgb)
            div1.className = "dentro tipo-2";
            div2.className = "dentro tipo-2";
            document.getElementById("linha").appendChild(div2, div1);
            document.getElementById("linha").appendChild(div1)
        }
    }
}
function tijinjo() {
    if (n%2 == 0) {
        const div1 = document.createElement("div");
        stackTijo(nTijolos, src16, 'tijolo', div1, 'tijo')
        div1.className = 'dentro'
        document.getElementById('linha').appendChild(div1)
    }
    else{
        if ((((nTijolos/10)-Math.floor(nTijolos/10))*10) == 1) {
            const div1 = document.createElement("div");
            stackTijo(nTijolos, src8, 'tijolinho', div1, 'tijolinho')
            div1.className = 'dentro'
            document.getElementById('linha').appendChild(div1)
        }
        else{
            const div = document.createElement("div");
            const imga = document.createElement("img");
            imga.src = src8
            imga.alt = 'tijolinho'
            imga.className = 'tijolinho'
            div.append(imga)
            stackTijo(nTijolos - (Math.floor(nTijolos/10)*10) - 1, src16, 'tijolo', div, 'tijolo')
            div.className = 'dentro'
            document.getElementById('linha').appendChild(div)
        }

    }
}
function stackTijo(v, s, a, f, c){
            for (let i = 0; i < v; i++) {
            const img = document.createElement("img");
            img.src = s
            img.alt = a
            img.className = c
            f.append(img)
        }
}