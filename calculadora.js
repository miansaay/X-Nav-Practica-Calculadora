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

  $("#porc").click(porc = function() {
		 Op1= $("#resultado").val();
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "%");
   var resultado = Op1/100;
  	$("#resultado").val(resultado);
		 Op1="";
   
  });

  $("#signo").click(function() {
		 Op1= $("#resultado").val();
   console.log(Op1);
		 punto = Boolean(0);
  	$("#resultado").val(Op1 + "-");
  });

  

  $("#sqrt").click(raiz = function() {
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
   //Op1 = $("#resultado").val();
   //console.log(Op1);
   var valor = $(this).val();
   console.log(valor.split("="));
   var Op = valor.split("=")[0];
   console.log(Op.split("+"));
   if (Op.split("+")) {
      Op1 = Op.split("+")[0];
      operacion = "+";
      console.log(Op1);
   } else if (Op.split("-")) {
     Op1 = Op.split("-")[0];
     console.log(Op1);
     operacion = "-";
   }
  });

  $("#igual").click(result = function() {
    console.log(Op1);
    if (Op1 == "") {
      $("#resultado").val("Syntax ERROR");
      Op1="";
    } else {
		    Op1 = parseFloat(Op1);
      res = $("#resultado").val();
      console.log(res.split(operacion));
      minun = res.split(operacion);
      if (minun[0] == ""){
       Op2 = parseFloat(minun[2]);
       console.log(Op2);
      }else{
       Op2 = parseFloat(minun[1]);
       console.log(Op2);
      }
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
       Op2="";
      
    }
  });


/* Las siguientes lineas hacen que se muevan los botones, pero tenemos que tener en la carpeta el archivo jrumble */

var demoTimeout0;
$('#cero').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout0);
	$this.trigger('startRumble');
	demoTimeout0 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#cero').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeout1;
$('#uno').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout1);
	$this.trigger('startRumble');
	demoTimeout1 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#uno').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeout2;
$('#dos').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout2);
	$this.trigger('startRumble');
	demoTimeout2 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#dos').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeout3;
$('#tres').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout3);
	$this.trigger('startRumble');
	demoTimeout3 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#tres').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeout4;
$('#cuatro').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout4);
	$this.trigger('startRumble');
	demoTimeout4 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#cuatro').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeout5;
$('#cinco').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout5);
	$this.trigger('startRumble');
	demoTimeout5 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#cinco').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});
var demoTimeout6;
$('#seis').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout6);
	$this.trigger('startRumble');
	demoTimeout6 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#seis').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});
var demoTimeout7;
$('#siete').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout7);
	$this.trigger('startRumble');
	demoTimeout7 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#siete').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});
var demoTimeout8;
$('#ocho').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout8);
	$this.trigger('startRumble');
	demoTimeout8 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#ocho').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});
var demoTimeout9;
$('#nueve').click(function(){
	$this = $(this);
	clearTimeout(demoTimeout9);
	$this.trigger('startRumble');
	demoTimeout9 = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#nueve').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});

var demoTimeoutcom;
$('#punto').click(function(){
	$this = $(this);
	clearTimeout(demoTimeoutcom);
	$this.trigger('startRumble');
	demoTimeoutcom = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#punto').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});


var demoTimeoutsig;
$('#signo').click(function(){
	$this = $(this);
	clearTimeout(demoTimeoutsig);
	$this.trigger('startRumble');
	demoTimeoutcom = setTimeout(function(){$this.trigger('stopRumble');}, 300)
});

$('#signo').jrumble({
	x: 2,
	y: 2,
	rotation: 1
});


});
