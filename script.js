let Monday =[9,'Cloudy',50,6.2]
let Tuesday=[11,'Sunny ',96,89,85]
let Wensday=[16,'Rainy',99,79,98]
let Thursday=[13,'Windless',10,13,9]
let Friday=[12,'Foggy',10,13,9]
function on(){
    var t = document.getElementById('day').value
    switch (t) {
        case 'Monday':
          out(Monday)
          break;
        case 'Tuesday':
          out(Tuesday)
          break;
      case 'Wensday':
          out(Wensday)
          break;
          case 'Thursday':
              out(Thursday)
              break;
              case 'Friday':
                out(Friday)
                break;
        
              
      }
    
}

function out(arr){

    document.getElementById('temp').innerHTML =arr[0]+"°C"
    document.getElementById('des').innerHTML =arr[1]
    document.getElementById('hum').innerHTML ="Humidity "+arr[2] +"%"
    document.getElementById('wind').innerHTML ="Wind speed "+arr[3]+"km/h"
}