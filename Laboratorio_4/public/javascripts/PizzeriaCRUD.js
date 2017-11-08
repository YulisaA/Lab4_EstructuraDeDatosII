// guardar datos en una tabla 
function guardar(){
    
     var _nom = document.getElementById("NombreP").value;
     var _tipo = document.getElementById("TipoM").value;
     var _cantidad = document.getElementById("CantidadP").value;
     if(document.getElementById("ExtraQ").checked === true)
     {
       var Queso = "Con Extra Queso";
     }
     else{
       Queso = "Sin extra queso"
     }
     var Ingredientes = document.getElementById("Ingredientes").value;
     var Descripcion = document.getElementById("DescripcionP").value;
     var campo4 = document.createElement("input");
     campo4.type = "button";
     campo4.value = "Borrar Fila";
     campo4.onclick = function() {
  
         tbody.removeChild(fila);
         
     }
  
     var fila="<tr><td>"+_nom+"</td><td>"+_tipo+"</td><td>"+Ingredientes+"</td><td>"+_cantidad+"</td><td>"+Queso+"</td><td>"+Descripcion+"</td><td>"+campo4+"</td></tr>";
  
     var btn = document.createElement("TR");
      btn.innerHTML=fila;
     document.getElementById("tabla").appendChild(btn);
  }