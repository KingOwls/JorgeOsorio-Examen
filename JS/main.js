importScripts (data)
Costos = 0;
const Calidad = 
`
<div>
    <h1> ¿Qué nivel de calidad estás buscando?</h1>
    <div>
        <img src="IMG/answer-1-1.png">
        <p>Calidad Optima</p>
    </div>
    <div>
        <img src="IMG/answer-1-2.png">
        <p>Buena relación Calidad/precio</p>        
    </div>
    <div>
        <img src="IMG/answer-1-3.png">
        <p>No me importa tanto la calidad</p>       
    </div>
</div>
`
const Appi =
`
<div>
    <h1> ¿Qué tipo de App necesitas?</h1>
    <div>
        <img src="IMG/answer-2-1.png">
        <p>Aplicación Android</p>
    </div>
    <div>
        <img src="IMG/answer-2-2.png">
        <p>Aplicación IOS</p> 
    </div>
    <div>
        <img src="IMG/answer-2-3.png">
        <p>Aplicación Windows Phone</p>
    </div>
    <div>
        <img src="IMG/answer-2-4.png">
        <p>Aplicación Android +IOS</p>   
    </div>
</div>
`
const AppiDesine =
`
<div>
    <h1> ¿Qué diseño quieres que tenga tu App?</h1>
    <div>
        <img src="IMG/answer-3-1.png">
        <p>Interfaz sencilla</p>
    </div>
    <div>
        <img src="IMG/answer-3-2.png">
        <p>Interfaz personalizada</p>  
    </div>
    <div>
        <img src="IMG/answer-3-3.png">
        <p>Interfaz replicada de la web</p>        
    </div>
    <div>
        <img src="IMG/answer-3-4.png">
        <p>No necesito diseño</p>        
    </div>
</div>
`
const AppiMoney =
`
<div>
    <h1> ¿Cómo Monetizar con tu App?</h1>
    <div>
        <img src="IMG/answer-4-1.png">
        <p>Aplicación gratuita con Publicidad</p>
    </div>
    <div>
        <img src="IMG/answer-4-2.png">
        <p>Aplicación de pago</p>
    </div>
    <div>
        <img src="IMG/answer-4-3.png">
        <p>Compra dentro de la web</p>
    </div>
    <div>
        <img src="IMG/answer-4-4.png">
        <p>Otro /No lo sé todavía</p>
    </div>
</div>
`
const AppiVerification =
`
<div>
<h1> ¿Tu App necesita sistema de autenticación?</h1>
<div>
    <img src="IMG/answer-5-1.png">
    <p>Sí, con redes sociales y email</p>
</div>
<div>
    <img src="IMG/answer-5-2.png">
    <p>Sí, con email</p>
</div>
<div>
    <img src="IMG/answer-5-3.png">
    <p>No</p>
</div>
<div>
    <img src="IMG/answer-5-4.png">
    <p>No lo sé todavía</p>
</div>
</div>

`
const Guardado =
`
<div>
    <p>¡Bien! ¡Hemos terminado!</p>
    <h4>¡Compartenos si te ha gustado!</h4>
    <h4>El costo estimado de tu app es</h4>
    <a>Costo</a>
    
    <p>Editar Respuesta</p>
    <h4>En GBP contamos los mejores desarolladores de apps y webs para tu proyecto, Publica tu proyecto en GBP.</h4>
    <button> Terminar</button>
</div>
`
const GuardadoData =
`
<div>
    <p>Nombre del cliente</p>
    <p>Nmr de Contacto</p>
    <p>Email COntacto</p>
    <p>Vlr Total cotización</p>
</div>
`
function Agregado(SeleccionA, SeleccionB, SeleccionC, SeleccionD, SeleccionE){
    switch(SeleccionA){
        case 1:
            Costos += 300.000
        break
        case 2:
            Costos += 380.000
        break
        case 3:
            Costos += 200.000
        break
    }
    switch(SeleccionB){
        case 1:
            Costos += 2000.000
        break
        case 2:
            Costos += 3000.000
        break
        case 3:
            Costos += 800.000
        break
        case 4:
            Costos += 3500.000
        break
    }
    switch(SeleccionC){
        case 1:
            Costos += 500.000
        break
        case 2:
            Costos += 1000.000
        break
        case 3:
            Costos += 800.000
        break
        case 4:
            Costos += 300.000
        break
    }
    switch(SeleccionD){
        case 1:
            Costos += 600.000
        break
        case 2:
            Costos += 1000.000
        break
        case 3:
            Costos += 2000.000
        break
        case 4:
            Costos += 3500.000
        break
    }
    switch(SeleccionE){
        case 1:
            Costos += 2000.000
        break
        case 2:
            Costos += 1500.000
        break
        case 3:
            Costos += 0
        break
        case 4:
            Costos += 3500.000
        break
    }
}
function Guardate(Costo){
    saveData(Costo);
}
class main{
}