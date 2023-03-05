


function calcular(){
    var lg = document.getElementById("lg")
    var ssg = document.getElementById("samsung")
    var philco = document.getElementById("philco")
    var tcl = document.getElementById("tcl")
    var outros = document.getElementById("outros")
    var resultado = document.getElementById("resultado")

    var total = Number(lg.value) + Number(ssg.value) + Number(philco.value) + Number(tcl.value) + Number(outros.value)

    lgResultado = (lg.value*100) / total
    ssgResultado = (ssg.value*100) / total
    philcoResultado = (philco.value*100) / total
    tclResultado = (tcl.value*100) / total
    outrosResultado = (outros.value*100) / total
    


    

    resultado.innerHTML = `LG: ${lgResultado.toFixed(2)}%</br>Samsung: ${ssgResultado.toFixed(2)}%</br>Philco: ${philcoResultado.toFixed(2)}%</br>TCL: ${tclResultado.toFixed(2)}%</br>Outros: ${outrosResultado.toFixed(2)}%`

    
    
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['LG',  lgResultado],
        ['SAMSUNG',  ssgResultado],
        ['PHILCO', philcoResultado],
        ['TCL', tclResultado],
        ['OUTROS', outrosResultado],
      ]);

      var options = {
        title: 'FLOORSHARE',
        is3D: false,
        colors: ['red', 'blue', 'black', 'green', 'yellow']
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }
    
}






  


