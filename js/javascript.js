window.addEventListener("load", ()=>{



})

const applyStyles = iframe => {
    let styles = {
        fontColor : "#ffffff",
        backgroundColor : "rgba(0, 0, 0, 1)",
        fontGoogleName : "VT323",
        fontSize : "20px",
    }
    
    iframe.contentWindow.postMessage(JSON.stringify(styles), "*");	
}