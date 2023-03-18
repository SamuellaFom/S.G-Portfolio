import Image from 'next/image'
import avant from '../public/avant.png'
import apres from '../public/apres.png'
import pendant from '../public/pendant.jpg'

export default function Homepage() {
  return (
    <>
      <section className="headersection">
        <div className="container">
          <div className="title">
            <h1>Samuella FOM</h1>
            <h2>Developpeuse Web</h2>

            <div>
              <a href="cv-1.pdf" target="_blank">
                <input id="button-edit" type="button" value="Télecharger mon CV" />
              </a>
            </div>
          </div>
        </div>
        <div id="logo">
          <Image src={avant} alt="photo pinterest" />
        </div>

        <div className="barre"></div>
        <div className="barre1"></div>
      </section>
    </>
  )
}
