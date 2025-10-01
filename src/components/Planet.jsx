export default function Planet({name, climate, gravity}){
    return (
        <div className="card1">
            <h2>Name: {name}</h2>
            <h3>Climate: {climate}</h3>
            <h3>Gravity: {gravity}</h3>
        </div>
    );
}