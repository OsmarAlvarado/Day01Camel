
//CUERPO DEL CAMELLO, Y LA FORMA DE DIBUJO CON LA QUE VA MOVIENDOSE EN PANTALLA
//con una clase, hacemos el constructor de camello
class Camel {

    constructor(ctx, posX, posY, width, height) { //realizamos los keys del camello.
        this.ctx = ctx
        this.camelPos = { x: posX, y: posY }
        this.camelSize = { w: width, h: height }

        this.imageInstance = undefined

        this.init() //para ejecutar en la inicializacion, el constructor
    }

    init() { //aqui colocamos la imagen que se usara y se mostrara en el canvas
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/camello.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
    }

    moveLeft() {
        this.camelPos.x -= 30
    }

    moveRight() {
        this.camelPos.x += 30
    }


}