import Card from './card'

export default function Projectpage() {
  return (
    <>
        <h3 className="title">projects</h3>
        <div className="p1">
          <Card
            id={1}
            photo={'pin.png'}
            title={'The Hyrule Castle'}
            description={
              'Construction d’un RPG en TypeScript avec la création un gameplay autour de fonctions algorithmiques et mathématiques.'
            }
          />
        </div>
        <div className="p2">
          <Card
            id={2}
            photo={'api.png'}
            title={'REST API'}
            description={
              "Conceptions d'API et de MVC, avec le développement de l'API avec NodeJS, TypeScript et ExpressJS et la conception d'une base de données basée sur MySQL."
            }
          />
        </div>
        <Card
          id={3}
          photo={'mywebsite.png'}
          title={' My Website'}
          description={
            "Utilisation du développement d'une API pour la creation d’un site d'e-commerce avec le framework NextJS (ReactJS)."
          }
        />
        <div className="p2">
          <Card
            id={4}
            photo={'chat.png'}
            title={"CHAT'NCLUDE"}
            description={
              "Conception un système de messagerie permettant à une équipe de pouvoir communiquer dans le cadre d’un évènement de co-construction. Avec la visualisation d’un agenda partagé, permettant de suivre le déroulé d’un évènement. Avec l'utilisation d'outils comme Nestjs, Socket.io, FullCalendar."
            }
          />
        </div>
    </>
  )
}