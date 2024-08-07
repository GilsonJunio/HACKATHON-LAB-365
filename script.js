let main = document.getElementsByClassName('main')[0]

let capturar = document.getElementsByClassName('capturar')[0]

//capturar.addEventListener('oninput', a =>{
function anexar_Imagem(){
	let capturar_Imagem = document.getElementsByClassName('capturar')[0].value	
	let imagem = document.createElement('img')
	imagem.setAttribute('src',capturar_Imagem)

	document.body.appendChild(imagem)
}
//})
