function funTrocaAnimal() {
    principal.className = sel_animal.value;
    img_animal.src = "Imagens/" + sel_animal.value + ".jpg";
    img_animal.alt = img_animal.title = sel_animal.value;
    texto_animal.innerHTML = sel_animal.value;
    window.scrollTo(0,0);
}
function funMudaFonte() {
    principal.style.fontFamily = sel_fonte.value
}
function funHabitat(par_alt, par_src) {
    img_habitat.src = par_src;
    img_habitat.alt = img_habitat.title = p_habitat.innerHTML = par_alt;
}