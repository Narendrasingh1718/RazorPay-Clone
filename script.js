
function cursorAnimation(){
    Shery.mouseFollower({
        ease:"cubic-bezier(0.23, 1, 0.320, 1)",
        duration:1,
    });
    
}    
function loadingAnimation(){
    var tl=gsap.timeline()
    tl.to("#loader",{
        opacity:1,
        duration:0.5
    })
tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow=0
        setInterval(function(){
         if(grow<100){
            h5timer.innerHTML=grow++
         }
        else{
           h5timer.innerHTML=grow
        }  
    },38)
    }
})

tl.to("#loader", {
    opacity: 0,
    onComplete: () => {
        document.getElementById("loader").style.display = "none"; 
    },
    duration: 0.2,
    delay: 3,
});

}
cursorAnimation();
loadingAnimation();