class solo {

    constructor(x,y,largura,altura){
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,largura,altura,options)
        this.x = x
        this.y = y
        this.largura = largura
        this.altura = altura
        World.add(world, this.body)
    }

    show(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.largura, this.altura)
    }

}