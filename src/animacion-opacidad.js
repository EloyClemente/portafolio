
var opacidadLetras = document.getElementsByClassName('animacion-opacidad')
var opacidadSubtitulo = document.getElementsByClassName('opacidad-subtitulo')
var proyectosBloque = document.getElementsByClassName('proyectos__bloque')
var degradado = document.getElementById('degradado')
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
		}
	}, 30)
}
window.addEventListener('load', function()
{
	setTimeout(function()
	{
		mostrarSubtitulo()
	}, 3100)
})





function moverDegradado() // MOVER DEGRADADO
{
	setTimeout(function()
	{
		degradado.style.top = '0%'
	}, 3500)
}
window.addEventListener('load', moverDegradado)





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
window.addEventListener('load', function()
{
	setTimeout(function()
	{
		mostrarProyectos()
	}, 7000)
})