function placar() {
    if (time1.value == '' || time2.value == '') {
        document.getElementById('plac').innerHTML = 'Placar inválido'
    }
    else if (time1.value > time2.value) {
        document.getElementById('plac').innerHTML = 'Time 01 foi vencedor'
    } else if
        (time1.value < time2.value) {
        document.getElementById('plac').innerHTML = 'Time 02 foi vencedor'
    } else if
        (time1.value == 0 && time2.value == 0) {
        document.getElementById('plac').innerHTML = 'O jogo ficou em 0 a 0'
    } else if
        (time1.value == time2.value) {
        document.getElementById('plac').innerHTML = 'Houve empate'
    }
}
