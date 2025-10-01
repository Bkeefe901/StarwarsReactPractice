export default function Ship({name, model, cargo_capacity}){
    return(
        <div className="card1">
            <h2>Name: {name}</h2>
            <h3>Model: {model}</h3>
            <h3>Cargo Capacity: {cargo_capacity}</h3>
        </div>
    )
}