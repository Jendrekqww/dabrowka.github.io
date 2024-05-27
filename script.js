function on(){
    let logrex = /[a-z]@gmail.com/;

    let log = document.getElementById('login').value
    let password = document.getElementById('password').value
    
let silverRegex = /@gmail.com/;

    if(log.match(logrex)!= null && password.length>8){
        
            location.href = "in.html"; 

    }
    else if(log.match(logrex)== null && password.length>8){
        alert('zły email')
    }
    else if(log.match(logrex)!= null && password.length<=8){
        alert('Za krótkie hasło')
    }
    else{
        alert('Złe hasło i email')
    }

    var name = log.replace(silverRegex, "")

    document.querySelector('.name').innerHTML = 'chuj'
    

}
    
