
import React,{useState} from 'react'

export default function Textbox(props) {

    const ConvertUpCase = () =>{
        console.log("click to uppercase"  + text);
        let changeUp = text.toUpperCase();
        settext(changeUp)
        props.showalert("Text set to Uppercase!..." ,"warning");
    }
    const ConvertLoCase = () =>{
        console.log("click to uppercase"  + text);
        let changeUp = text.toLowerCase();
        settext(changeUp)
        props.showalert("Text set to Lowercase!....","success");
    }
    const clearAll = () =>{
        let changeUp = "";
        settext(changeUp)
        props.showalert(" Thank you for clearning the Text!...." , "primary");
    }
     
  

    // const countlength = () =>{
    //    let count  = (text.length);
    //    setcharacterCount(count);
    // }

    const chnage = (event) =>{
        console.log("on chnage")
        settext(event.target.value)
    }
    const[text , settext] = useState("Enter text here")
    // const[charcount , setcharacterCount] = useState()
    return (
        <>
            <h1>{props.heading}</h1>
            <form action="">
                <div className="form-group my-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'? 'gary':'white'}} value={text} onChange={chnage} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </form>
            {/* <div className="data">
                <p>number of  chaacter is  : {charcount}</p>
            </div> */}
            <button className='btn btn-primary mr-2' onClick={ConvertUpCase}>Uppercase</button> 
            <button className='btn btn-primary mr-2' onClick={ConvertLoCase}>Lowercase</button>
            <button className='btn btn-primary mr-2' onClick={clearAll}>Clear text</button>
            {/* <button className='btn btn-primary' onClick={countlength}>Count the No of character </button> */}

            <div className={`container mt-5 ${props.mode}`}>
                <h4>{text.length} Characters  and {text.split(" ").length} Words</h4>
                <h5> {0.008 *text.split(" ").length}  time to read in Min </h5>
                <h3>preview</h3>
                <p>{text.length>0?text:"Enter the above text here to diaplay the preview"}</p>
            </div>
        </>
    )
}
