function Meme() {

    /*function getMemeImage() {
        const memesArray=memesData.data.memes
        const randomNumber=math.floor(math.random() *memesArray.length)
        const url = memesArray[randomNumber].url*/
        const [count, setCount] = React.useState(0)

    
            function add() {
                setCount(function(oldValue) {
                return oldValue+1})
            }
        

        function subtract() {
            setCount(count-1)
        }
        function subtract() {
            setCount (prevCount=>prevCount +1)
        }

    
    
    return (
        /*<section>
            <form>
             <fieldset>
               <input type="text"  placeholder="top-text" className="form-input" required />
               <input type="text"  placeholder="bottom-text" className="form-input" required />
               
    
             </fieldset>
             
             
            </form>
            <button 
            className="submit"
              onClick={getMemeImage}>
                Get a new meme image</button>*/
            <div>
            
            <button onClick={subtract}>-</button>
            <div><h1>{count}</h1></div>
            <button onClick={add}>+</button>
            </div>
            
            
        //</section>
    )
}

