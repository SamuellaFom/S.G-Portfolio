import Image from 'next/image'
import avant from '../public/avant.png'

export default function Homepage() {
  return (
    <>
      <div className="container">
        <h1 className="container-me">
          <div className="amination">Hi,</div>
          <div className="amination">Je suis Samuella Fom,</div>
          <div className="amination">web developer</div>
        </h1>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat vel iste alias, quidem nisi ullam temporibus
          tenetur et impedit dolorem eligendi deserunt praesentium at consequatur labore voluptatibus earum excepturi
          blanditiis?
        </span>
        <br />
        <a href="cv-1.pdf" target="_blank">
          <input id="button-edit" type="button" value="Télecharger mon CV" />
        </a>
      </div>
      <div>
        <Image id="logo" src={avant} alt="photo pinterest" />
      </div>
    </>
  )
}
