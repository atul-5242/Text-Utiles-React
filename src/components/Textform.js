import React , {useState} from 'react'
// STATE and HOOKS Concept in video no.7


export default function Textform(props) {
  const handleUpClick=()=>{
    // console.log("Up click is clicked"+text)

    // setText(text.toUpperCase());//not do like this do like this :--->
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Upper case.","success")
  }
  const handleDownClick=()=>{
    // console.log("Up click is clicked"+text)
    
    // setText(text.toUpperCase());//not do like this do like this :--->
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into lower case.","success")
  }
  const handleclearClick=()=>{
    // console.log("Up click is clicked"+text)
    
    // setText(text.toUpperCase());//not do like this do like this :--->
    
    setText("");
    props.showAlert("Text is cleared","danger")
  }
  const handleOnchange=(event)=>{
  console.log("On Change")
  setText(event.target.value)//ye handlUp click or on chnge wala don { const [text, setText] = useState('Enter Text here');      }   upar neche khi par bhi lekhe wo text khi se bhi access ho skata hai.
}

  const [text, setText] = useState('');
  // console.log(setText);
  


  return (
    <>
    <div className="mb-3">
  <h1  style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
  <textarea className="form-control" placeholder='Enter Text Here...' style={{backgroundColor:props.mode==='dark'?'#042743':'white' ,color:props.mode==='dark'?'white':'black'}}value={text} onChange={handleOnchange} id="mybox" rows="6"></textarea>
  <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper-Case</button><br />
  <button className="btn btn-primary my-3 " onClick={handleDownClick}>Convert to Lower-Case</button>
  <button className="btn btn-danger mx-3 " onClick={handleclearClick}>Clear</button>
</div>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>You Text Summary</h1>
    <p>{text.split(" ").length} words {text.length} character</p>
    <p>{0.008*text.split(" ").length}Time to read This Artical.</p>
    </div>
    <pre  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>                          Preview</h2></pre>
    <pre  style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter Somthing to preview it."}</pre>
    </>
  )
}

