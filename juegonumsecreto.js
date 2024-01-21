let numeroSecretoMax = 1000
let numeroSecreto = Math.floor(Math.random()*numeroSecretoMax)+1;
let numeroUsuario = 0
let intento = 1
let maxIntento = 6
while(numeroSecreto != numeroUsuario){
    
    numeroUsuario = parseInt(prompt(`Elija el número secreto entre 1 y ${numeroSecretoMax}`));

    if(numeroSecreto==numeroUsuario){
        alert(`Usted ha acertado! El número secreto es: ${numeroSecreto}. Ha acertado en ${intento} ${intento == 1 ? 'vez' : 'veces'}`);

    }
    else {
        if(numeroSecreto>numeroUsuario){
            alert('Usted a fallado. El número secreto es mayor.');
        }
        else{
            alert('Usted ha fallado. El número secreto es menor.');
        }
        intento ++
        if(intento>maxIntento){
            alert('Ha llegado al número máximo de intentos.');
            break
            }
    }
}
 