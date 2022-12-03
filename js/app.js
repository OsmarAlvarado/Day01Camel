
//construimos el objeto y metodos
const controlledApp = { // hacemos un objeto
    name: 'Animated App',
    description: 'Canvas app for basic shapes animating',
    version: '2.0.0',
    author: 'Osmar',
    license: undefined,
    canvasNode: undefined, //cuerpo del canvas
    ctx: undefined, // contexto
    gameSize: { w: undefined, h: undefined }, //tamaño del juego ancho y altura

    camel: undefined,

    framesIndex: 0,


    init(myCanvas) { //inicializamos el metodo del canvas
        this.canvasNode = document.querySelector(`#${myCanvas}`) //aqui llamamos al canvas
        this.ctx = this.canvasNode.getContext('2d') //hacemos el tipo de contexto 2d
        console.log('EL CONTEXTO:', this.ctx)

        this.setDimensions()
        this.setEventListeners()
        this.createCamel()
        this.start()
        this.createObstacle()
    },

    setDimensions() { //metodo de ingresar los elementos de dimensiones de la pantalla canvas
        this.gameSize = { // editamos el ancho y altura de la web
            w: window.innerWidth, //el ancho es igual a : window y propiedad, tipo de globalthis. devuelve un numero
            h: window.innerHeight //la altura es igual a : window y propiedad, tipo de globalthis. devuelve un numero
        }

        //console.log(this.gameSize);
        //ingresamos al cuerpo de canvas, el valor de anchura y altura y propiedad
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    setEventListeners() { //metodo de lo que recibira la orden escuchada por canvas.
        //en este caso, es la construccion de la orden que le daremos al Evento.

        document.onkeydown = event => { //construccion de la variable, declarando que el teclado haga cosas.
            const { key } = event
            if (key === 'ArrowLeft') {
                this.camel.moveLeft()
            }
            if (key === 'ArrowRight') {
                this.camel.moveRight()
            }

            if (key === 'ArrowUp') {
                this.camel.moveUp()
            }

            if (key === 'ArrowDown') {
                this.camel.moveDown()
            }
        }
    },

    createCamel() { //funcion donde hemos creado la estructura fisica del camello
        this.camel = new Camel(this.ctx, 300, 300, 100, 100)// con el contexto, llamando al objeto camel, generamos los datos de camello que estaban indefinidos
    },

    start() { //con el metodo star, contruimos la accion en movimiento
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++      // <- ayudita
        }, 30)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {
        this.camel.draw()
        if (this.framesIndex % 15 === 0) this.createObstacle()      // <- ayudita :3
    },

    createObstacle() {
        console.log('OBSTACULOOOOOOOOOO');
    }

}