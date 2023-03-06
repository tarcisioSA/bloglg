


function calcular(){
  var lg = document.getElementById("lg")
  var ssg = document.getElementById("samsung")
  var philco = document.getElementById("philco")
  var tcl = document.getElementById("tcl")
  var toshiba = document.getElementById("toshiba")
  var outros = document.getElementById("outros")
  var resultado = document.getElementById("resultado")

  if(lg.value.length == " "){
    lg.value = 0 }
  if(ssg.value.length == " "){
    ssg.value = 0 }
  if(philco.value.length == " "){
    philco.value = 0 }
  if(tcl.value.length == " "){
    tcl.value = 0}
  if(toshiba.value.length == " "){
    toshiba.value = 0}
  if(outros.value.length == " "){
    outros.value = 0
  }

  var total = Number(lg.value) + Number(ssg.value) + Number(philco.value) + Number(tcl.value) + Number(toshiba.value) + Number(outros.value)

  lgResultado = (lg.value*100) / total
  ssgResultado = (ssg.value*100) / total
  philcoResultado = (philco.value*100) / total
  tclResultado = (tcl.value*100) / total
  toshibaResultado = (toshiba.value*100) / total
  outrosResultado = (outros.value*100) / total

 
 
    resultado.innerHTML = `LG: ${lgResultado.toFixed(2)}% -  ${lg.value} Peças</br>Samsung: ${ssgResultado.toFixed(2)}% -  ${ssg.value} Peças</br>Philco: ${philcoResultado.toFixed(2)}% -  ${philco.value} Peças</br>TCL: ${tclResultado.toFixed(2)}% -  ${tcl.value} Peças</br>Outros: ${outrosResultado.toFixed(2)}% -  ${outros.value} Peças</br>Toshiba: ${toshibaResultado.toFixed(2)}% - ${toshiba.value} Peças</br>Total ${total} peças`

    const ctx = document.getElementById('myChart');
    
    new Chart(ctx, {
      type: 'pie',
      
      data: {
        labels: ['LG', 'SAMSUNG', 'PHILCO', 'TCL', 'TOSHIBA','OUTROS'],
        
        datasets: [{
          label: '# QTD TVs',
          data: [lgResultado, ssgResultado, philcoResultado, tclResultado, toshibaResultado, outrosResultado],
          backgroundColor: ["#ef233c", "#4361ee", "#293241", "#7cb518","#f77f00", "#ffd60a"],
          borderWidth: 1
        }]
      },
      options: {
        events: ['click'],
        scales: {
          y: {
            beginAtZero: true
          }
        }
        
      }
    });
  




  

 

  

}
function recarregar(){
  window.location.reload();
} 






  


