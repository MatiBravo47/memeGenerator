import html2canvas from 'html2canvas';
import React, {useState} from 'react';
import './Imgmeme.css';
import './Colors.css';


const Imgmeme = ()=>{

// Margenes ---------------------------------------
  const [margen, setMargen] = useState('mt-3')

  const margin = ['mt-5 mb-5', '']

  const conMargen = margin => {
    return margin.map((margen, index) => {
      if (index==0) {
        return( <button className="btn btn-dark m-1" key={index} onClick={() => setMargen(margen)}>Agregar margen</button>)
      }
      return( <button className="btn btn-dark m-1" key={index} onClick={() => setMargen(margen)}>Quitar margen</button>)
    })
  }
// COLORS------------------------------------------------------ 
  const [color, setColor] = useState('white')
  const colors = ['blanco', 'amarillo', 'rojo', 'azul', 'verde']
  const renderButtons = colors => {
    return colors.map( (color, index) => {
      return ( <button className={`bg-${color} button button5`} key={index}        
        onClick={() => setColor(color)}>
      </button>)
    })
  }
// TEXTO---------------------------------
    const [toptextmeme, setTopTextmeme] = useState();
    const [bottomtextmeme, setBottomTextmeme] = useState();
    const topText = (e) => {
        setTopTextmeme(e.target.value);
    }
    const bottomText = (e) => {
        setBottomTextmeme(e.target.value);
    }

//Seleccionar imagen---------------------------
    const [imgmeme, setImgmeme] = useState(1);

    const seleccionarImg = (e) => {
      setImgmeme(e.target.value);
    }
//Exportar imagen ------------------
    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            let img = canvas.toDataURL("memes/jpg");
            let link = document.createElement("a");
            link.download = "memegenerator.jpg";
            link.href = img;
            link.click();
        });
    }

    return(
      <div className='text-center container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-sm-18 col-md-6'>
            <h1 className='mt-3 mb-3 text-center text-white'>Editá tu meme</h1>
            <img src="./memes/Wait-A-Minute-Memes.jpeg" className='w-100 d-block m-auto meme-inicio'/>
            <h5 className='mt-3 mb-3 text-center text-white'>Elegí tu meme</h5>
            <select onChange={seleccionarImg} className='form-select form-select-lg mb-3 w-50 m-auto' arial-label=".form-select-lg example" >
              <option value={1}>Coreanita</option>
              <option value={2}>Bob esponja</option>
              <option value={3}>Futurama</option>
              <option value={4}>Pikachu</option>
              <option value={5}>Sainz</option>
            </select>
            <div className='d-flex justify-content-center '>
              <figure className="position-relative bg-dark border border-light" id="exportar">
                <p className={ `${color} w-100 px-40 position-absolute top-0 start-25 h2`}>{toptextmeme} </p>
                <p className={`${color} w-100 px-40 position-absolute bottom-0 start-25 h2`}>{bottomtextmeme} </p> 
                <img src={`./memes/${imgmeme}.jpg`}  className={`figure-img w-100 ${margen} d-block m-auto`} alt="meme" />
              </figure>
            </div>
            <h5 className='mt-3 mb-3 text-center text-white'>Ingrese el texto del meme</h5>
            <input onChange={topText} autocomplete="off" className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Texto superior" name="meme" arial-label="default input example" ></input>
            <input onChange={bottomText} autocomplete="off" className='form-control w-50 m-50 m-auto d-block mt-3' type="text" placeholder="Texto inferior" name="meme" arial-label="default input example" ></input>

            <button onClick={Descargar} type="button" className='btn btn-primary mt-3 mb-4'>Descargar</button>
            <div>
            <div className='d-flex align-items-center justify-content-center'>
              <span className='titulo'><h3 className='mt-3 mb-3 text-center text-white'>Personalizalo</h3></span>
              <img src='./memes/icons8-salt-bae-50.png'/>
            </div>
            <h3 className='mt-3 mb-3 text-center text-white'>Elegí color de texto</h3>
            <div>
              {renderButtons(colors)}
            </div>
            <div>
              {conMargen(margin)}
            </div>
    </div>
          </div>
        </div>
      </div>
    );

}

export default Imgmeme;
