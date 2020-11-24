

let canvas = null;
let ctx = null;
let spriteList = [];



window.addEventListener("load", ()=>{

   

    tick();

})


const tick = () => {


  

    document.querySelector(".animation").onclick = evt => {
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
        
        this.x = 0;
        this.y = 50;

        this.node = document.createElement('div')
        this.node.className = "bird"
        this.node.style.top = this.y + "px";
        this.node.style.left = this.x + "px";

        document.querySelector('.animation').appendChild(this.node)
    }

    tick() {
        let alive = true;

        this.x += 5;

        if (this.x > 1920) {
            this.node.remove()
            alive = false;
        }

        this.node.style.left = this.x + "px";

        return alive;

    }



    
}