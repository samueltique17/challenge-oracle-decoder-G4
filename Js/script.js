
let imagen = document.getElementById("imagen1");
let resultado = document.getElementById("areaR");
let copiar = document.getElementById("copiar");


function darFormato(cadena){
    
    let aMinus = cadena.replace(/[áàäâ]/g,'a');
    let eMinus = aMinus.replace(/[éèëê]/g,'e');
    let iMinus = eMinus.replace(/[íìïî]/g,'i');
    let oMinus = iMinus.replace(/[óòöô]/g,'o');
    let uMinus = oMinus.replace(/[úùüû]/g,'u');
    let enieMinus = uMinus.replace(/[ñ]/g,'n');
    let resultado = enieMinus.replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/gi,'');

    return resultado;
}

function encriptar(){
    let areaTexto = document.getElementById("text");
    let texto=areaTexto.value;
    if(texto== ""){
        document.getElementById("advertencia").style.color= "red"
        document.getElementById("advertencia").style.fontSize= "16px"
        
    }
    if(texto!=""){
        texto=texto.toLowerCase()
        texto= darFormato(texto) 
        texto=texto.replaceAll("e", "enter");
        texto=texto.replaceAll( "o", "ober");
        texto=texto.replaceAll( "i", "imes");
        texto=texto.replaceAll("a","ai");
        texto=texto.replaceAll( "u", "ufat");
        console.log(texto)
        let resultado = document.getElementById("result")
        resultado.value = texto
        document.getElementById("result").style.display= "inline"
        document.getElementById("areaR").style.display = "none";
        document.getElementById("imagen1").style.display = "none";
        document.getElementById("copiar").style.display= "inline"
        document.getElementById("advertencia").style.display = "none"
        document.getElementById("text").value = ""
    }
}


function desencriptar(){
    let areaTexto = document.getElementById("text");
    let texto=areaTexto.value;
    if(texto== ""){
        document.getElementById("advertencia").style.color= "red"
        
    }
    if(texto!=""){
        texto=texto.toLowerCase()  
        texto= darFormato(texto)
        texto=texto.replaceAll("enter","e" );
        texto=texto.replaceAll( "ober","o" );
        texto=texto.replaceAll( "imes","i" );
        texto=texto.replaceAll("ai","a");
        texto=texto.replaceAll( "ufat","u" );
        console.log(texto)
        let resultado = document.getElementById("result")
        resultado.value = texto
        document.getElementById("result").style.display= "inline"
        document.getElementById("areaR").style.display = "none";
        document.getElementById("imagen1").style.display = "none";
        document.getElementById("copiar").style.display= "inline"
        document.getElementById("advertencia").style.display = "none"
        document.getElementById("advertencia").style.fontSize= "16px"
        document.getElementById("text").value = ""
    }
}

function copy() {
    let resultado = document.getElementById("result");
    let copiar = document.getElementById("copiar");
    resultado.focus();
    document.execCommand("selectAll")
    document.execCommand("copy")
  }