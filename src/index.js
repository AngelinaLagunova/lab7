import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import text from './data.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

function Tagline() {
  return(
  <h1>
  Изучение React.js
  </h1>
  )
  }


  function Footer() {
    return(
    <footer>
    Контакты: 8 (423) 265 24 24 (доб.2397) pacific@dvfu.ru.
    </footer>
    )
    }

  const listImg = ["logo192.png", "logo_dvfu.png"]

  function Head(props) {

  const logoImages =props.listImg.map((img, index) =>
    <img key={index} src={img} />
  );

  return(
    <div className="head">
      {logoImages}
    </div>
  )
  }

const Text = (props) => {

  const [show, setShow] = React.useState([]);

  const showAll = (event) =>{
    let id = Number(event.target.id[1]);

    setShow(show => [...show,id]);

  }

  const showLess = (event) =>{
      let id = Number(event.target.id[1]);
      
      setShow(show => show.filter(item => item !== id));
      
  }

  const print = props.data.map((item,index) =>
    <p>
      <div className={(show.indexOf(index)!==-1)? "Less": "More"}>

          <span>{item.split(".")[0]}</span>
          <span id={"d"+index} onClick={showAll}>...</span>

      </div>

      <div id={"p"+index} className={(show.indexOf(index)!==-1)? "More": "Less"} onClick={showLess}>

        {item}

      </div>

    </p>
  )

  return(
    <p>
      {print}
    </p>

  )


}



function Content() { 
  return(     
    <>         
      <Head listImg={listImg}/>
      <Tagline/>
      <h3><Text data={text}/></h3>     
      <Footer/>
    </>     
  ) 
} 

root.render(<Content />)

