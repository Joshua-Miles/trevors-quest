class Element {
    constructor(){
        this.element = document.body.appendChild(document.createElement('div'))
        this.element.style.backgroundColor = 'black'
        // How does the below code work?
        this.width = 100
        this.height=  100

    }

    get width(){
        return parseInt(this.element.style.width)
    }

    set width(value){
        this.element.style.width = value + 'px'
    }

    get height(){
        return parseInt(this.element.style.height)
    }

    set height(value){
        this.element.style.height = value + 'px'
    }

}