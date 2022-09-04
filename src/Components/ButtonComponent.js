import React from 'react'
import '../Styles/ButtonComponent.css'
import memesData from './memesData'



function ButtonComponent() {
  
  const [MemeImg,setMemeImg] = React.useState("https://i.imgflip.com/24y43o.jpg");
  
  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
  })
  
  function tikla(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url; 
    
    setMemeImg(url); 

  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme (prevMeme => ({
      ...prevMeme,
      [name] : value
    }))
    
    // setMeme([name] : value)
  }


  return (
    <div className='button-component container'>
        <div className="row my-4">
            <div className="col-6">
              <input type="text" name="topText" value={meme.topText} onChange = {handleChange} id="" placeholder='Shut up' className='w-100 rounded-2 px-3'/>
            </div>
            <div className="col-6">
              <input type="text" name="bottomText" value={meme.bottomText} onChange = {handleChange} id="" placeholder='and take my money' className='w-100 rounded-2 px-3'/>
            </div>
            <div className="col-12">
                <button onClick={tikla} className='button-component-btn w-100 p-2 text-white my-4 rounded-2'>Get a new meme image</button>
            </div>
            <div className="button-component-img col-12 ">
             <img src={MemeImg} alt="" className='img-fluid w-100 ' />
             <span className='top-text text-white'>{meme.topText}</span> 
             <span className='bottom-text text-white'>{meme.bottomText}</span>
            </div>
        </div>
    </div>
  )
}
export default ButtonComponent;