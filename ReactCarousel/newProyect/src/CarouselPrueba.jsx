import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
 


export const CarouselPrueba = () => {


  return (
    <div className="carousel-wrapper" style={{width: '20%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Carousel autoPlay transitionTime={200} infiniteLoop showArrows={false} showStatus={false} showThumbs={false}>
                <div>
                    <p> Para ingresar a una estación, deberás escanear su código QR, el cual se encuentra localizado al lado de la puerta</p>
                    <img src="application.png"/>
                    <p>Una vez dentro de la estación, la aplicación te guiará para que puedas utilizar las funcionalidades necesarias</p>
                </div>
                <div>
                    <p>Desde aquí podrás acceder a una Estación Diagnóstica para realizar un chequeo de salud y/o ver a un médico en línea</p>
                    <img src="cabina.png" />
                    <p>La estación está equipada con dispositivos médicos de última generación, que pueden ser operados remotamente por un profesional'</p>
                </div>
                <div >
                    <p>Encuentra una estación. Podrás ingresar a cualquiera de nuestras estaciones</p>
                    <img src="mapa.png" />
                    <p>Para conocer las ubicaciones de las mismas, puedes ingresar al siguiente enlace</p>
                </div>             
            </Carousel>
        </div>
  )
}
