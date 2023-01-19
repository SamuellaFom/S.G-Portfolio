import Project from '../services'
import Image from 'next/image'

const Card = ({ title, photo, description }: Project) => {
  return (
    <div className="wrap">
      <div className="tile"> 
      <Image width={800} height={800} src={`/${photo}`} alt="photo"/>
      <div className="text">
        <h1>{title}</h1>
        <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
        <p className="animate-text">{description}</p>
      </div>
      </div>
    </div>
  )
}
export default Card
