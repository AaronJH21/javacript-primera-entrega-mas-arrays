let datos =[]

alert('Bienvenido')

if(localStorage.dato){
     let respuesta = confirm('Desea Ingresar al Sistema?')

     if(respuesta){
         ingresar()
     }else{
        alert('Gracias por su tiempo, recuerde que su usuario esta Registrado')
     }  
 }else{
     let usuario = prompt('ingrese su usuario').toLowerCase()
     let password = parseInt(prompt('ingrese su password como min 5 digitos (unicamente numeros)'))
     validar(usuario, password)
 }


function validar( usuario, password){

     if(password.toString().length < 5){
         alert('la contraseña debe ser mayor a 5 digitos (unicamente numeros)')
        password = parseInt(prompt('ingrese su password como min 5 digitos (unicamente numeros)'))
         validar()
     }else{
         datos.push(usuario)
         datos.push(password)

         localStorage.setItem('dato', JSON.stringify(datos))
     }
}



function ingresar(){
     let recuperoLocalS= JSON.parse(localStorage.getItem('dato'))
     console.log(recuperoLocalS);

     let usuarioRegistrado = prompt('ingreses su usuario')
     let passwordRregistrado = parseInt(prompt('ingreses su contraseña'))

     if((recuperoLocalS[0] == usuarioRegistrado) && (recuperoLocalS[1] == passwordRregistrado)){
         alert('inicio de sesion correcto')

         let numero3 = parseFloat(prompt("ingresa la nota del primer trimestre"))
         let numero4 = parseFloat(prompt("ingresa la nota del segundo trimestre"))
         let numero5 = parseFloat(prompt("ingresa la nota del tercer trimestre"))
         
         function PROMEDIOS(numero3,numero4,numero5){
             return (numero3+numero4+numero5) /3
             
         }
         alert(PROMEDIOS(numero3,numero4,numero5))
         

     }else{
         alert('Usuario incorrecto')
         ingresar()
     }

 }