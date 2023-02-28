import Project from '../services'
import Image from 'next/image'

/*const Card = ({ title, photo, description, id }: Project) => {
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
}*/

const Card = ({ title, photo, description, id }: Project) => {
  return (
    <section className='body_card'>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <Image width={800} height={800} src={`/${photo}`} alt="photo" />
          </div>
          <div className="card_content">
            <h2 className="card_title">{title}</h2>
            <p className="card_text">{description}</p>
          </div>
        </div>
      </li>
    </section>
  )
}
export default Card
