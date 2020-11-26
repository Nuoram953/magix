

let canvas = null;
let ctx = null;
let spriteList = [];



window.addEventListener("load", ()=>{

   

    tick();

})


const tick = () => {


  

    if (Math.random() < 0.1 && spriteList.length<3) {
        console.log("test");
        spriteList.push(new Bird())
    }
       
    for (let i = 0; i < spriteList.length; i++) {
        const sprite = spriteList[i];
        console.log(sprite);
        let alive = sprite.tick();

        if (!alive) {
            spriteList.splice(i, 1);
            i--;
        }
    }


    window.requestAnimationFrame(tick)
}


const applyStyles = iframe => {
    let styles = {
        fontColor : "#ffffff",
        backgroundColor : "rgba(0, 0, 0, 1)",
        fontGoogleName : "VT323",
        fontSize : "20px",
    }
    
    iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}

class Bird {
    constructor() {
        
        this.x = -50;
        this.y = (Math.random()*150)+25;

        this.speed = Math.random()*3

        this.node = document.createElement('div')
        this.node.className = "bird"
        this.node.style.top = this.y + "px";
        this.node.style.left = this.x + "px";

        document.querySelector('.animation').appendChild(this.node)
    }

    tick() {
        let alive = true;

        this.x += this.speed;

        if (this.x > 1920) {
            this.node.remove()
            alive = false;
        }

        this.node.style.left = this.x + "px";

        return alive;

    }



    
}