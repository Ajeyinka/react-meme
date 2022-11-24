import React, { useState } from "react";
import memesData from "./memesData";

function Meme() {

    const [meme, setMeme] = React.useState({
      topText:"",
      bottomText:"",
      randomImage :"https://i.imgflip.com/30b1gx.jpg"
    })
    
    const[allMemeImage,setAllMemeImage]=React.useState(memesData)
function getMemeImage() { 

        //THIS GETS THE DATA FROM THE DATA FILE
        const memesArray=allMemeImage.data.memes
        //THIS IS GETTING A RANDOM ITEM FROM THE FILE
        const randomNumber=Math.floor(Math.random() *memesArray.length)
        //THIS IS GETTING THE URL VALUE OF THE RANDOM NUMBER
        const url= memesArray[randomNumber].url
        setMeme(prevMeme => ({
          ...prevMeme, randomImage: url
        }))
          }

    
    
    
    
    
        return (
        <section>
            <form>
             <fieldset>
               <input type="text"  placeholder="top-text" className="form-input" required />
               <input type="text"  placeholder="bottom-text" className="form-input" required />
               
    
             </fieldset>
             
             
            </form>
            <button 
            className="submit"
            onClick={getMemeImage}
              >
                Get a new meme image  🖼</button>
            <img src={meme.randomImage}  className="meme-image"/>
            
            
        </section>
    )
}

export default Meme