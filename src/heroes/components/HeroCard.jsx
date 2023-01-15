import { Link } from "react-router-dom"

export const HeroCard = ({
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`
    //const characterByHero = (<p>{characters}</p>)
    const vCharacters = characters.split('').filter(character=> character !== alter_ego)

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">

            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        <p>{vCharacters}</p>

                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>  
                            Mas...
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
