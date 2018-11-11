
// CODIGO 1
function insertar(cantidad)
{
	var codigo = document.createElement('pre')


		if(cantidad == 9)
		{
			codigo.classList.add('texto1')
		}
		else if(cantidad == 10)
		{
			codigo.classList.add('texto2')
		}
		else if(cantidad == 11)
		{
			codigo.classList.add('texto3')
		}
	



	for(var i=0; i < cantidad; i++)
	{
		// ********************************* NO ANALIZAR !!!!  CÓDIGO DECORATIVO PARA EL FONDO
		// Template string  
		codigo.innerHTML += `

function crear_matriz( numero_de_casillas )
{
limpiar_matriz()


for(let i=0; i < numero_de_signos; i++)
{
	const capa_heaven_origen    = document.createElement('div')
	const capa_heaven_destino   = document.createElement('div')

	capa_heaven_origen.id       = 'origen'  + (i + 1) 
	capa_heaven_destino.id      = 'destino' + (i + 1)


	style_chosen( capa_heaven_origen, numero_de_signos )

	container_origen.appendChild( capa_heaven_origen )
	container_destino.appendChild( capa_heaven_destino )
}

	if(click == 1)
	{
		for(let i=0; i < matriz_destino.length; i++)
		{
			chosen_destino[i].classList.add('rejilla')
		}
	}
}
crear_matriz( '16' )

function style_chosen( capa_heaven_origen, capa_heaven_destino)
{
	capa_heaven_destino.style.transition = 'all, .3s'

switch( numero_de_signos )
{
	case '9': 
	capa_heaven_origen.classList.add('mist-9')
	capa_heaven_destino.classList.add('mist-9')
	break

	case '16':
	capa_heaven_origen.classList.add('mist-16')
	capa_heaven_destino.classList.add('mist-16')
	break

	case '25':
	capa_heaven_origen.classList.add('mist-25')
	capa_heaven_destino.classList.add('mist-25')
	break
}
} </br>`
	}

	return codigo
}


exports.insertarCodigo = insertar