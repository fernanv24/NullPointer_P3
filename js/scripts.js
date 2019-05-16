
function identificarse(){
	var enlace = document.getElementById('enlace_inicio');
	enlace.innerHTML='<a id="enlace_inicio" href="Agenda.html">Agenda</a>'+
							'<i class="fas fa-users"></i>';
	var contenido = document.getElementById('contenido');
	contenido.innerHTML=	'<div class="col-12 text-center" >'+'<i class="fas fa-check-circle Icon "></i>'+
										 '<h3 class="snow" >Se ha identificado con éxito, pulse en Agenda para ver sus eventos guardados</h3>'+
								'</div>';
	return false;
}
function registrarse(){
	var enlace = document.getElementById('enlace_inicio');
	enlace.innerHTML='<a id="enlace_inicio" href="Agenda.html">Agenda</a>'+
							'<i class="fas fa-users"></i>';
	var contenido = document.getElementById('contenido');
	contenido.innerHTML='<div class="col-12 text-center" >'+'<i class="fas fa-check-circle Icon "></i>'+
										 '<h3 class="snow" >Se ha registrado con éxito, puede guardar eventos que se guardarán en su Agenda.</h3>'+
								'</div>';
	return false;
}
function aniadir_evento(){
	if (document.getElementById) {
		w = screen.availWidth;
		h = screen.availHeight;
	}  

	var popW = 400, popH = 275;

	var leftPos = (w-popW)/2;
	var topPos = (h-popH)/2;



	msgWindow = window.open('','popup','width=' + popW + ',height=' + popH + 
		                      ',top=' + topPos + ',left=' + leftPos + ',       scrollbars=yes');

	msgWindow.document.write 
		 ('<HTML><HEAD><TITLE>Evento añadido</TITLE><link href="../css/bootstrap.min.css" rel="stylesheet"><link href="../css/EventoX.css" rel="stylesheet"><link rel="stylesheet" href="../css/all.css"><link href="https://fonts.googleapis.com/css?family=Concert+One|Roboto|Nunito|Exo+2" rel="stylesheet"><script type="text/javascript" src="../js/scripts.js"></script></HEAD><BODY  class="bg-lightcoral snow">' +'<div class="text-center"><i class="fas fa-check-circle Icon"></i>'+
			'<p>El evento se ha añadido a tu agenda, si no estás registrado no se guardará la agenda para tu siguiente sesión.</p></div>'+
		 '<INPUT TYPE="button" class="btn boton snow text-center" VALUE="Aceptar"onClick="window.close();"></BODY>    <script src="../js/jquery.min.js"></script><script src="../js/bootstrap.min.js"></script><script src="../js/scripts.js"></script>   </HTML>');

			

	var enlace = document.getElementById('enlace_inicio');
	enlace.innerHTML='<a id="enlace_inicio" href="Agenda.html">Agenda</a>'+
							'<i class="fas fa-users"></i>';
}
