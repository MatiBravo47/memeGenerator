import html2canvas from 'html2canvas';
import React, {useState} from 'react';
import './Imgmeme.css';
import './Colors.css';


const Imgmeme = ()=>{

// Margenes ---------------------------------------
  const [margen, setMargen] = useState(false)

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
  const [colorTexto, setColorTexto] = useState('white')

  const style = {
    texto: {
      color: colorTexto,
    },
  };
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
        <h1 className='mt-3 mb-3 text-center text-white'>Editá tu meme</h1>
          <div className='col-12 col-sm-12 col-md-6'>
                   

            
            
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
                <p className={ ` ${colorTexto} w-100 px-40 position-absolute top-0 start-25 h2`} style={style.texto}>{toptextmeme} </p>
                <p className={` ${colorTexto} w-100 px-40 position-absolute bottom-0 start-25 h2`} style={style.texto}>{bottomtextmeme} </p> 
                <img src={`./memes/${imgmeme}.jpg`}  className={`figure-img w-100 ${margen} d-block m-auto`} alt="meme" />
              </figure>
            </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6'>
            <h5 className='mt-3 mb-3 text-center text-white'>Ingrese el texto del meme</h5>
            <input onChange={topText} autoComplete="off" className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Texto superior" name="meme" arial-label="default input example" ></input>
            <input onChange={bottomText} autoComplete="off" className='form-control w-50 m-50 m-auto d-block mt-3' type="text" placeholder="Texto inferior" name="meme" arial-label="default input example" ></input>

            <button onClick={Descargar} type="button" className='btn btn-primary mt-3 mb-4'>Descargar</button>

            <div className='d-flex align-items-center justify-content-center'>
              <span className='titulo'><h3 className='mt-3 mb-3 text-center text-white'>Personalizar</h3></span>
              <img src='./memes/icons8-salt-bae-50.png'/>
            </div>
            
            <h3 className='mt-3 mb-3 text-center text-white text-center'>Elegí color de texto</h3>
            <div className='d-flex justify-content-center'>
<input onChange={(e) => {
              setColorTexto(e.target.value);
            }} type="color" className="form-control form-control-color" id="exampleColorInput" title="Choose your color"></input>
            </div>
            <div>
              {conMargen(margin)}
            </div>
            </div>
          </div>
        </div>
    );

}

export default Imgmeme;
