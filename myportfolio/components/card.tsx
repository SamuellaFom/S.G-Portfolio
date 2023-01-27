import Project from '../services'
import Image from 'next/image'

const Card = ({ title, photo, description, id }: Project) => {
  return (
    <div id="container">
      <div className="product-details">
        <h1>{title}</h1>

        <p className="information">{description}</p>
      </div>

      <div className="product-image">
        <Image width={800} height={800} src={`/${photo}`} alt="photo" />

        <div className="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Height : </strong>5 Ft{' '}
            </li>
            <li>
              <strong>Shade : </strong>Olive green
            </li>
            <li>
              <strong>Decoration: </strong>balls and bells
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Card
