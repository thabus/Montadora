function fun_muda_cor(){
    let cor = document.getElementById("muda_cor").value;
    document.getElementById("colorida").style.backgroundColor = cor;
  }
  
  document.getElementById("muda_cor").addEventListener("change", fun_muda_cor)
  
  
  let montadoras = ['Fiat', 'Volkswagen', 'Jeep', 'Volvo', 'Mercedes'];
  
  const quantidade = () =>{
    let quant = document.getElementById("quantidade").value;
    func_montadoras(quant)
  }
  
  const func_montadoras = (quant) =>{
    let SelectMontadoras = document.getElementById("montadoras");
    SelectMontadoras.innerHTML = ``;
    for (let mont = 0; mont < quant; mont++) {
       SelectMontadoras.innerHTML += `<option value= "${mont}">${montadoras[mont]}</option>` 
    } 
  }
  
  
  function func_selecionar() {
    let teste = document.getElementById("montadoras").value
    document.getElementById("mostrar").innerText = montadoras[teste];
  }
  
  function inclui_nova_montadora() {
      let nova_montadora = document.getElementById("nova_montadora").value;
      montadoras.push(nova_montadora)
      quantidade();
  }

  function exclui_montadora() {
    montadoras.pop();
    quantidade();
  }