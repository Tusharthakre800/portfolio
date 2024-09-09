

const canvas  = document.querySelector("canvas")
const contaxt = canvas.getContext("2d")


const frames = {
    currentindex:0,
    maxIndex: 1345
}

let imagesLoaded = 0
const images = [] 


 const preloadimages = ()=>{
        for(var i = 1; i<=frames.maxIndex; i++){
            const imageurl = `./hui3/frame_${i.toString().padStart(4,"0")}.jpeg`
            const img = new Image();
            img.src = imageurl;
            // console.log(img);
            
            img.onload = ()=>{
                imagesLoaded++;
                if (imagesLoaded === frames.maxIndex){
                   loadimage (frames.currentindex) 
                   startanimation()   
                
            }
        
            }
            images.push(img);
        }
 }
 const loadimage = (index)=>{
     if(index>=0 && index<=frames.maxIndex){
         const img = images[index]
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
         
         const scalex  = canvas.width / img.width;
         const scaley  = canvas.height / img.height;
         const  scale =  Math.max(scalex, scaley )
         
         const newWidth = img.width  * scale
         const newHeight = img.height  * scale
         
         const offsetx = (canvas.width - newWidth) / 2
         const offsety = (canvas.height - newHeight) / 2
         
         contaxt.clearRect(0,0,canvas.width,canvas.height)
         contaxt.imageSmoothingEnabled = true
         contaxt.imageSmoothingQuality = "high"
         contaxt.drawImage(img,offsetx,offsety,newWidth,newHeight)
         frames.currentindex = index;
        }
    }
    
    
   function startanimation(){
        var t1 = gsap.timeline({
            scrollTrigger: {
                trigger:".parent",
                start:"top top",
                scrub: 2,
                end: "bottom bottom",
                // markers : true
            }
            
        })

        const updateframes= (index)=>{
            return {
                currentindex : index,
                ease:"linear",
                onUpdate :function(){
                    loadimage(Math.floor(frames.currentindex))
                }
            }
        }
        t1
        .to(frames,updateframes(50),"first")
        .to(".animation1",{opacity:0,ease:"linear"},"first")

        .to(frames,updateframes(120),"second")
        .to(".animation2",{opacity:1,scale:1,ease:"linear"},"second")

        .to(frames,updateframes(200),"third")
        .to(".animation2",{opacity:0,scale:0,ease:"linear"},"third")

        .to(frames,updateframes(280),"forth")
        .to(".animation3",{opacity:1,ease:"linear"},"fourth")
        
        .to(frames,updateframes(340),"six")
        .to(".animation3",{opacity:0,ease:"linear"},"six")

        .to(frames,updateframes(450),"seven")
        .to(".animation4",{opacity:1,ease:"linear"},"seven")

        .to(frames,updateframes(560),"eath")
        .to(".animation4",{opacity:0,ease:"linear"},"eath")

        .to(frames,updateframes(650),"eight")
        .to(".animation5",{opacity:1, display:"unset",ease:"linear"} ,"eight")

        .to(frames,updateframes(740),"ten")
        .to(".animation5",{opacity:0,ease:"linear",display:"none",},"ten")

        .to(frames,updateframes(810),"eleven")
        .to(".animation6",{opacity:1,ease:"linear"},"eleven")

        .to(frames,updateframes(900),"twelve")
        .to(".animation6",{opacity:0,ease:"linear"},"twelve")

        .to(frames,updateframes(1010),"thirteen")
        .to(".animation7",{opacity:1,ease:"linear"},"thirteen")

        .to(frames,updateframes(1090),"fourteen")
        .to(".animation7",{opacity:0,ease:"linear"},"fourteen")

        .to(frames,updateframes(1120),"fifteen")
        .to(".animation8",{opacity:1,ease:"linear",display:"unset"},"fifteen")

        .to(frames,updateframes(1180),"sixteen")
        .to(".animation8",{opacity:0,ease:"linear",display:"none"},"sixteen")

        .to(frames,updateframes(1230),"seventeen")
        .to(".animation9",{opacity:1,ease:"linear",display:"unset"},"seventeen")

        .to(frames,updateframes(1300),"eighteen")
        .to(".animation9",{opacity:0,ease:"linear",display:"none"},"eighteen")

        .to(frames,updateframes(1345),"twenty")
        .to(".animation10",{opacity:1,ease:"linear"},"twenty")

        
    }
    preloadimages()
  

    window.addEventListener("resize",()=>{
        loadimage.apply(Math.floor((frames.currentindex)))
    })