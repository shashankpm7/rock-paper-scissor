    const btn = document.querySelector(".btn");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const main = document.querySelector(".main");

    const imgs = ["paper.png","rock.png","scissors.png"];

    let game_main;
    btn.addEventListener("click",()=>{
        if (btn.innerHTML === 'START'){
            btn.innerHTML = "STOP";
            game_main = setInterval(gamer,300);
        }
        else{
            btn.innerHTML = "START" ;
            clearInterval(game_main);
            win_condition();
        }
    })

    function gamer(){
        img1.setAttribute("src",imgs[Math.floor(Math.random()*3)]);
        img2.setAttribute("src",imgs[Math.floor(Math.random()*3)]);
    }

    document.querySelector(".pa").addEventListener("click",()=>{
        document.location.reload();
    })

    function win_condition(){
    
        //compare images and declare winner
        if(img1.getAttribute("src") === img2.getAttribute("src")){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                document.querySelector(".results").innerHTML = "TIE :(";
                main.style.display = "none";
            },500);
        }
        if(img1.getAttribute("src") === "scissors.png" && img2.getAttribute("src") === "paper.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                document.querySelector(".results").innerHTML = "YOU WON!!!";
            main.style.display = "none";
            },500);
        }
        if(img1.getAttribute("src") === "paper.png" && img2.getAttribute("src") === "rock.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                main.style.display = "none";
                document.querySelector(".results").innerHTML = "YOU WON!!!";
                
            },500);
        }
        if(img1.getAttribute("src") === "rock.png" && img2.getAttribute("src") === "scissor.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                main.style.display = "none";
                document.querySelector(".results").innerHTML = "YOU WON!!!";
                
            },500);
        }
        if(img2.getAttribute("src") === "scissors.png" && img1.getAttribute("src") === "paper.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                main.style.display = "none";
                document.querySelector(".results").innerHTML = "YOU LOST!!!";
                
            },500);
            
        }
        if(img2.getAttribute("src") === "paper.png" && img1.getAttribute("src") === "rock.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                main.style.display = "none";
                document.querySelector(".results").innerHTML = "YOU LOST!!!";
            
            },500);
        }
        if(img2.getAttribute("src") === "rock.png" && img1.getAttribute("src") === "scissor.png"){
            setTimeout(()=>{
                document.querySelector(".res").style.display = "block";
                main.style.display = "none";
                document.querySelector(".results").innerHTML = "YOU LOST!!!";
            
            },500);
        }
    }
    


