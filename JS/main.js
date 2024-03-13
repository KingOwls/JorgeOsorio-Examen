Costos = 0;
const GuardadoData =
`
<div>
    <p>Nombre del cliente</p>
    <p>Nmr de Contacto</p>
    <p>Email COntacto</p>
    <p>Vlr Total cotización</p>
</div>
`
function Calidad(Obtain){
    switch(Obtain){
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
}
function Type(Obtain){
    switch(Obtain){
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
}
function Dysaine(Obtain){
    switch(Obtain){
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
}

function Money(Obtain){
    switch(Obtain){
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
}

function Autentication(Obtain){
    switch(Obtain){
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

function sendInfo(){
    console.log(Costos);
}