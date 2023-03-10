import { useLocation, useNavigate } from "react-router-dom"
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const {q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length > 0 && heroes.length === 0)

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    /* if(searchText.trim().length <= 0) return; */
    
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Seach</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Seach a hero" 
              className="form-control" 
              name="searchText" 
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1"> Seach </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '')
            ? <div className="alert alert-primary">Seach a hero</div>
            : (heroes.length === 0) 
              && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}
          
          <div className="alert alert-primary animate__animated animate__fadeIn animate__faster" style={{display: showSearch ? '' : 'none'}}>Seach a hero</div>

          <div className="alert alert-danger animate__animated animate__fadeIn animate__faster" style={{display: showError ? '' : 'none'}}>No hero with <b>{q}</b></div>

          {
            heroes.map(hero => (

              <HeroCard key={hero.id} {...hero}/>

            ))
          }

        </div>

      </div>

    </>
  )
}
