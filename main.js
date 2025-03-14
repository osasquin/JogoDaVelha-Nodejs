const prompt = require("prompt-sync")();

var i, j, lin, col;
var jogadas = 0;
var jogador = 'o';
var vencedor = ' ';
var fimJogo = false;
var tab = [3];
var count = 0;

for (i = 0; i < 3; i++) {
    tab[i] = []; 
    for (j = 0; j < 3; j++) {
        tab[i][j] = ' '; 
    }
}

while ((jogadas < 9) && (fimJogo == false)) {
    for(i = 0; i < 3; i++){
        console.log(`[${tab[i]}]`)
    }

    lin = parseInt(prompt(`${jogador} em [linha]: `));
    col = parseInt(prompt(`${jogador} em [coluna]: `));
    if(lin || col > 2){
        console.log("Jogada além dos limites");
    }
    if(tab[lin][col] != ' '){
        console.log("Coordenada cheia!");
    }
    else{
        tab[lin][col] = 'o';
    }
        // primeira situação (vertical)
        for (i = 1; i < 3; i++) {
            for (j = 0; j < 3; j++) {
                if (tab[i][j] != ' ' && tab[i][j] == tab[i - 1][j]) {
                    count++;
                }
            }
        }

        // segunda situação (horizontal)
        for (i = 0; i < 3; i++) {
            for (j = 1; j < 3; j++) {
                if (tab[i][j - 1] != ' ' && tab[i][j - 1] == tab[i][j]) {
                    count++;
                }
            }
        }

        // terceira situação (diagonais)
        if (tab[0][0] != ' ' && tab[0][0] == tab[1][1] && tab[1][1] == tab[2][2]) {
            count = 3;
        }

        if (tab[0][2] != ' ' && tab[0][2] == tab[1][1] && tab[1][1] == tab[2][0]) {
            count = 3;
        }
        //count >= vencedor
        if (count >= 3) {
            vencedor = jogador;
            fimJogo = true;
        } else {
            if(jogador == 'o'){
                jogador = 'x';
            }
            else{
                jogador = 'o';
            }
        }
}

//d
if (vencedor == ' ') {
    console.log("empate\n");
} else {
    console.log(`${vencedor} venceu`);
}
