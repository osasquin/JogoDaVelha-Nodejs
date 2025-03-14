const prompt = require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [];
var count = 0;

for (i = 0; i < 3; i++) {
    tab[i] = [];
    for (j = 0; j < 3; j++) {
        tab[i][j] = ' ';
    }
}

while ((jogadas < 9) && (fimJogo == false)) {
    for (i = 0; i < 3; i++) {
        console.log(`[${tab[i]}]`);
    }

    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));

    if (lin < 0 || lin > 2 || col < 0 || col > 2) {
        console.log("Jogada além dos limites");
        continue;
    }
    if (tab[lin][col] != ' ') {
        console.log("Coordenada cheia!");
        continue;
    } else {
        tab[lin][col] = jogador;
        jogadas++;
    }

    count = 0; 

    //primeira situação (vertical)
    for (j = 0; j < 3; j++) {
        if (tab[0][j] != ' ' && tab[0][j] == tab[1][j] && tab[1][j] == tab[2][j]) {
            count = 3;
        }
    }

    //segunda situação (horizontal)
    for (i = 0; i < 3; i++) {
        if (tab[i][0] != ' ' && tab[i][0] == tab[i][1] && tab[i][1] == tab[i][2]) {
            count = 3;
        }
    }

    //terceira situação (diagonais)
    if (tab[0][0] != ' ' && tab[0][0] == tab[1][1] && tab[1][1] == tab[2][2]) {
        count = 3;
    }

    if (tab[0][2] != ' ' && tab[0][2] == tab[1][1] && tab[1][1] == tab[2][0]) {
        count = 3;
    }

    //count>=3
    if (count >= 3) {
        vencedor = jogador;
        fimJogo = true;
    } else {
        if(jogador == 'o'){
            jogador = 'x';
        }else{
            jogador = 'o';
        }
    }
}

for (i = 0; i < 3; i++) {
    console.log(`[${tab[i]}]`);
}

if (vencedor == ' ') {
    console.log("Empate\n");
} else {
    console.log(`${vencedor} venceu`);
}
