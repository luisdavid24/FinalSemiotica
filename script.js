var usados= new Array();
var cantidadVector= new Array();
var condicion=0;
var subtotal=0;
var botonCondicion=1;

function funcionCambiar(){
    var imagen=document.getElementById('imagen');
    var opcionFoto=document.getElementById('opcionFoto').value;
    if(opcionFoto==="Foto1"){
        imagen.src="./imagenes/perfil1.png"
    }else if(opcionFoto==="Foto2"){
        imagen.src="./imagenes/perfil2.png";
    }
}

function random1(min,max) {
    return Math.floor((Math.random()*(max-min))+min);
}
    
function random2(min,max) {
    return((Math.random()*(max-min))+min);
}

function llenarTabla(){
    if(botonCondicion===1){
        llenarVector();
        botonCondicion++;
    }else{
        generarTotal();
    }
}
function llenarVector(){
        var numero;
        numero=random1(1,11);
        while(condicion!=5){
            numero=random1(1,11);
            if(!estaVector(numero)){
                usados.push(numero);
                condicion++;
            }
        
        }
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();
        
        if (dd < 10) {
          dd = '0' + dd;
        }
        
        if (mm < 10) {
          mm = '0' + mm;
        }
        
        today = dd+ '/' +mm+ '/' + yyyy;
        
        for(let i=0;i<5;i++){
            let fila=document.createElement("tr");
            let imagenMostrar=imagen(usados[i]);
            var cantidad=random1(1,10);
            var valor=generarValor()
            var imagensrc="producto";
            imagensrc+=usados[i];
            var totalProducto=valor*cantidad;
            let filaNueva;
            let idCantidad="cantidad";
            idCantidad+=i;
            filaNueva='<tr id="'+i+'"><td>'+(i+1)+'</td><td>'+"Producto"+usados[i]+'</td><td><img class="img_producto" src="./imagenes/'+imagensrc+'.jpg"/>'+'</td><td>'+today+'</td><td id="'+idCantidad+'">'+cantidad+'</td><td>'+valor+'</td><td>'+totalProducto+'</td></tr>';
            cantidadVector.push(cantidad);
            $("#Tabla").append(filaNueva);
            subtotal+=totalProducto;
            
            
           
        }
    
        
        
    }
    
    function imagen(num){
        var imagen;
        if(num%2==0){
            imagen="./imagenes/usuario1.jpg";
        }else{
            imagen="./imagenes/usuario2.png";
        }
        return imagen;
    }
    
    function estaVector(num){
        var repe = false;
        for (i=0; i<usados.length; i++) {
            if (num == usados[i]) {
            repe = true;
            }
        }
        return repe;
    }
    
    function generarValor(){
        var numeroValor=random1(1000,10000);
        while(numeroValor%100!=0){
            numeroValor=random1(1000,10000);
        }
        return numeroValor;
    }
    
    function generarTotal(){
        document.getElementById('containerTotal').style.display="block";
        var subtotalP=document.getElementById('subtotal');
        subtotalP.innerHTML=subtotal;
        var ivaP=document.getElementById('iva');
        ivaP.innerHTML=subtotal*0.19;
        var totalP=document.getElementById('total');
        totalP.innerHTML=subtotal*1.19;
                
    }
    
    $("#boton3").click(function () {
        $("#Tabla tr").each(function (index) {
            var id= $(this).attr('id');
            var promedio=cantidadVector[id];
            let idbusca="#"
            idbusca+=id;
            if(promedio>=5){
                $(idbusca).css({"background":"green"})
            }else{
                $(idbusca).css({"background":"yellow"})
            
            }
        })
    });
