export default function Person({name, birth_year, eye_color }){
    return(
        <div className="card1">
            <h1>Name: {name}</h1>
            <h3>Birth Year: {birth_year}</h3>
            <h3>Eye Color: {eye_color}</h3>
        </div>
    )
}

