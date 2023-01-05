function getElement(element) {
    return document.querySelector(element)
}

const botaoSemana = getElement('.botao__semana');
const segundaDia = getElement('#dia1'),
      tercaDia = getElement('#dia2'),
      quartaDia = getElement('#dia3'),
      quintaDia = getElement('#dia4'),
      sextaDia = getElement('#dia5');
      console.log(segundaDia.value);
const checkEdicao = getElement('#edicao__check');
const editarSemana = getElement('.edicao__semana');
const atuSegunda = getElement('#segunda'),
      atuTerca = getElement('#terca'),
      atuQuarta = getElement('#quarta'),
      atuQuinta = getElement('#quinta'),
      atuSexta = getElement('#sexta');

function visivel(){
    checkEdicao.checked = true;
    editarSemana.style.display = "flex"
}

function invisivel(){
    checkEdicao.checked = false;
    editarSemana.style.display = "none";
}


function atualizaoSemana(){
    segundaDia.innerHTML = atuSegunda.value;
    tercaDia.innerHTML = atuTerca.value;
    quartaDia.innerHTML = atuQuarta.value;
    quintaDia.innerHTML = atuQuinta.value;
    sextaDia.innerHTML = atuSexta.value;
    editarSemana.style.display = "none";
}