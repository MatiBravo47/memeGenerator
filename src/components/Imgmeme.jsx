import html2canvas from 'html2canvas';
import React, {useState} from 'react';
import './Imgmeme.css'

const Imgmeme = ()=>{

    const [imgmeme, setImgmeme] = useState();
    const [toptextmeme, setTopTextmeme] = useState();
    const [bottomtextmeme, setBottomTextmeme] = useState();

    const seleccionarImg = (e) => {
        setImgmeme(e.target.value);
        console.log(e.target.value);
    }

    const topText = (e) => {
        setTopTextmeme(e.target.value);
        console.log(e.target.value);
    }
    const bottomText = (e) => {
        setBottomTextmeme(e.target.value);
        console.log(e.target.value);
    }

    const Descargar = (e) => {
        html2canvas(document.querySelector("#exportar")).then(function(canvas) {
            {/*document.body.appendChild(canvas);*/}
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
          <div className='col-8 col-sm-18 col-md-6'>
            <h1 className='mt-3 mb-3 text-center'>Editá tu propio meme</h1>
            <h3 className='mt-3 mb-3 text-center'>Elegí tu meme</h3>
            <select onChange={seleccionarImg} className='form-select form-select-lg mb-3 w-50 m-auto' arial-label=".form-select-lg example" >
              <option value={1}>Coreanita</option>
              <option value={2}>Bob esponja</option>
              <option value={3}>Futurama</option>
              <option value={4}>Pikachu</option>
              <option value={5}>Sainz</option>
            </select>
            <div className='d-flex justify-content-center'>
              <figure className="position-relative bg-dark" id="exportar">
                <p className="w-100 px-40 position-absolute top-0 start-25 h2 text-white">{toptextmeme} </p>
                <p className="w-100 px-40 position-absolute bottom-0 start-25 h2 text-white">{bottomtextmeme} </p> 
                <img src={`./memes/${imgmeme}.jpg`} className="figure-img w-100 h-80 mt-5 mb-5 d-block m-auto" alt="meme" />
              </figure>
            </div>
            <h3 className='mt-3 mb-3 text-center'>Ingrese el texto del meme</h3>
            <input onChange={topText} className='form-control w-50 m-50 m-auto d-block' type="text" placeholder="Texto superior" name="meme" arial-label="default input example" ></input>
            <input onChange={bottomText} className='form-control w-50 m-50 m-auto d-block mt-3' type="text" placeholder="Texto inferior" name="meme" arial-label="default input example" ></input>

            <button onClick={Descargar} type="button" className='btn btn-primary mt-3 mb-4'>Descargar meme</button>

          </div>
        </div>
      </div>
    );

}

export default Imgmeme;
