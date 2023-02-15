const boxes = document.querySelectorAll(".box")


window.addEventListener("scroll", function(){
   const whereToAddClass = window.innerHeight * 0.8
   console.log(whereToAddClass)

   boxes.forEach(box => {
        const topOfEachBox = box.getBoundingClientRect().top
        console.log("box " + topOfEachBox)
        if (topOfEachBox < whereToAddClass){
            box.classList.add("show")
        }
        else {
            box.classList.remove("show")
        }
   })
})