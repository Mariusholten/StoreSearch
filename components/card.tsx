export default function Card(props: {name: string, address: string, city: string, email: string}){
    const name = props.name;
    const address = props.address;
    const city = props.city;
    const email = props.email;

    return(
        <div className="card">
            <h2>{name}</h2>
            <p>Adresse: {address}, {city}</p>
            <p>Email: {email}</p>
        </div>
    )
}