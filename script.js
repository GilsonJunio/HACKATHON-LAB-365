let main = document.getElementsByClassName('main')[0]
let barra_Superior = document.getElementsByClassName('barraSuperior')[0]
//let capturar = document.getElementsByClassName('capturar')[0]
//let capturar_Imagem = document.getElementsByClassName('capturar')[0].value	
let imagem = document.createElement('img')
//capturar.addEventListener('oninput', a =>{
/*
let tabelas =document.getElementsByClassName('tabela')
tabelas[0].setAttribute('class','tabela-0')
tabelas[1].setAttribute('class','tabela-1')
tabelas[2].setAttribute('class','tabela-2')
*/
let mes =document.getElementsByClassName('mes')
//mes[0,1,2].setAttribute('class','mes-0')
//mes[1].setAttribute('class','mes-1')
//mes[2].setAttribute('class','mes-2')

function anexar_Imagem(){
	imagem.setAttribute('src','pp.jpg')
	imagem.setAttribute('id','imagem')
	main.appendChild(imagem)
}
//})
let botao = document.getElementById("teste")

botao.addEventListener('click', () =>{
	anexar_Imagem()
})
/*
function showThumbnail(files) {
    if (files && files[0]) {
      var reader = new FileReader(files);

      reader.onload = function(e) {
        $('#imagem').attr('src', e.target.result);
      }
      console.log(reader)
      reader.readAsDataURL(files[0]);
    }
  }
  */


/*
const el = document.querySelector(".draggable");
let state = {
    eventToCoordinates(event) { return {x: event.clientX, y: event.clientY}; },
    dragging: false,
    _pos: {x: 0, y: 0},
    get pos() { return this._pos },
    set pos(p) {
        const container = el.parentNode.getBoundingClientRect();
        const bounds = el.getBoundingClientRect();
        this._pos = {
            x: clamp(p.x, 0, container.width - bounds.width),
            y: clamp(p.y, 0, container.height - bounds.height)
        };
        el.style.transform = 
            `translate(${this._pos.x}px,${this._pos.y}px)`; 
    },
}
// no need to call setter if initial pos is 0,0
makeDraggable(state, el);

function clamp(x, lo, hi) { return x < lo ? lo : x > hi ? hi : x; }

function makeDraggable(state, el) {
    // from https://www.redblobgames.com/making-of/draggable/
    function start(event) {
        if (event.button !== 0) return; // left button only
        let {x, y} = state.eventToCoordinates(event);
        state.dragging = {dx: state.pos.x - x, dy: state.pos.y - y};
        el.classList.add('dragging');
        el.setPointerCapture(event.pointerId);
    }

    function end(_event) {
        state.dragging = null;
        el.classList.remove('dragging');
    }

    function move(event) {
        if (!state.dragging) return;
        let {x, y} = state.eventToCoordinates(event);
        state.pos = {x: x + state.dragging.dx, y: y + state.dragging.dy};
    }

    el.addEventListener('pointerdown', start);
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    el.addEventListener('pointermove', move)
    el.addEventListener('touchstart', (e) => e.preventDefault());
}
*/