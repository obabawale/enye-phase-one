const Profiles = ({ profiles, loading }) => {
    if(loading){
        return (<h2>Loading...</h2>)
    }
    return(
        <ul className="list-group mb4">   
            {profiles.map(profile => (
                <li key={profile.CreditCardNumber} className="list-group-item">{profile.FirstName} {profile.LastName}</li>
            ))}
        </ul>
    )
}

export default Profiles;