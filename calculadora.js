/*Miguel Ángel Sainz Ayuso*/
 
$(document).ready(function() {

  punto = new Boolean(0);

  $("#uno").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "1" );
  });

  $("#dos").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "2" );
  });

   $("#tres").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "3" );
  });

  $("#cuatro").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "4" );
  });

  $("#cinco").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "5" );
  });

  $("#seis").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "6" );
  });
  
  $("#siete").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "7" );
  });

  $("#ocho").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "8" );
  });

  $("#nueve").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "9" );
  });
  
  $("#cero").click(function() {
		  var valor = $("#resultado").val();
  	  $("#resultado").val(valor + "0" );
  });

  
  $("#suma").click(function() {
		 Op1 = $("#resultado").val();
		 operacion ="+";
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "+");
  });

  $("#resta").click(function() {
		 Op1 = $("#resultado").val();
		 operacion = "-";
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "-");
  });

  $("#mult").click(function() {
		 Op1 = $("#resultado").val();
		 operacion = "*";
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "*");
  });

  $("#division").click(function() {
		 Op1 = $("#resultado").val();
		 operacion = "/";
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "/");
  });

  $("#porc").click(function() {
		 Op1= $("#resultado").val();
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "%");
   var resultado = Op1/100;
  	$("#resultado").val(resultado);
		 Op1="";
   
  });

  $("#sqrt").click(function() {
		 Op1= $("#resultado").val();
		 punto = Boolean(0);
   var resultado = Math.sqrt(Op1);
  	$("#resultado").val(resultado);
		 Op1="";
  });

  $("#C").click(function() {
		  Op1= "";
		  operacion="";
		  punto = Boolean(0);
    $("#resultado").val("");
  });


  $("#punto").click(function() {
		var valor= $("#resultado").val();
		if (punto == 0)
	  	$("#resultado").val(valor + "." );
		  punto = Boolean(1);
   });

  $("input").keyup(function() {
   Op1= $("#resultado").val();
   console.log(Op1);
   var valor = $(this).val();
   operacion = valor.split("")[1];
   console.log(operacion);
  });
 
  $("#igual").click(function() {
    console.log(Op1);
    if (Op1 == "") {
      $("#resultado").val("Syntax ERROR");
      Op1="";
    } else {
		    Op1 = parseFloat(Op1);
      res = $("#resultado").val();
      Op2 = parseFloat(res.split(operacion)[1]);
      console.log(Op2);
		    if (operacion =="+")
			     var resultado = Op1+Op2;
		    else if (operacion == "-")
			     var resultado = Op1-Op2;
	     else if (operacion == "*")
			     var resultado = Op1*Op2;
		    else if (operacion == "/")
			     var resultado = Op1/Op2;
      console.log(resultado);
  	   $("#resultado").val(resultado);
		    Op1="";
    }
  });

});
