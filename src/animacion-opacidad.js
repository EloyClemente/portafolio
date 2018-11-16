
var opacidadLetras = document.getElementsByClassName('animacion-opacidad')
var opacidadSubtitulo = document.getElementsByClassName('opacidad-subtitulo')
var proyectosBloque = document.getElementsByClassName('proyectos__bloque')
var degradado = document.getElementById('degradado')
var capa1 = document.getElementById('animacion__capa1')
var capa2 = document.getElementById('animacion__capa2')
var capa3 = document.getElementById('animacion__capa3')
var i = 0
var x = 0
var z = 0



function mostrarLetras() // MOSTRAR ELOY CLEMENTE
{
	var iniciar = setInterval(function()
	{
		opacidadLetras[i].style.opacity = '1'
		i++

		if(i == 12)
		{
			clearInterval(iniciar)	

			setTimeout(function()
			{
				mostrarSubtitulo()
			}, 1000)
		}
	}, 200)
	
}
window.addEventListener('load', mostrarLetras)





function mostrarSubtitulo() // MOSTRAR SUBTITULO
{
	var iniciar = setInterval(function()
	{
		if(x != 9 && x != 12 && x != 22) // Evitamos los puntos
		{
			opacidadSubtitulo[x].style.opacity = '1'
		}
		
		x++

		if(x == 33)
		{
			clearInterval(iniciar)	
			moverDegradado()
		}
	}, 30)
}





function moverDegradado() // MOVER DEGRADADO
{
	var tiempo

	degradado.style.top = '0%'


	if(window.innerWidth < 500)
	tiempo = 2000
	
	else
	tiempo = 500
	


	setTimeout(function()
	{
		mostrarCodigoDecorativo()

		setTimeout(function()
		{
			mostrarProyectos()
		}, 500)
		
	}, tiempo)
}




function mostrarCodigoDecorativo() // MOSTRAR CODIGO DECORATIVO
{
	capa1.style.opacity = '1'
	capa2.style.opacity = '1'
	capa3.style.opacity = '1'
}





function mostrarProyectos() // MOSTRAR PROYECTOS
{
	var iniciar = setInterval(function()
	{
		proyectosBloque[z].style.opacity = '1'
		z++

		if(z == proyectosBloque.length - 1)
		{
			clearInterval(iniciar)	
		}
	}, 600)
}





