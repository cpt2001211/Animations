const btn = document.querySelector("#throttle");
 
// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // Logging the difference
        // between previously 
        // called and current called timings
        

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector("#center")
.addEventListener("mousemove",
    throttleFunction((dets) => {

        var div= document.createElement("div");

        div.classList.add('imgdiv');
        div.style.left = dets.clientX + "px";
        div.style.top = dets.clientY + "px";

        var img = document.createElement("img");
        img.setAttribute("src", './imgs/krishna1.jpeg');
        div.appendChild(img);

        document.body.appendChild(div);
        gsap.to(img, {
            y:"0",
            ease: Power1,
            duration: .6
        })
        gsap.to(img, {
            y:"100%",
            ease: Power2,
            delay: .6
        })

        setTimeout(function(){
            div.remove();
        },2000)

    }, 400)
    );