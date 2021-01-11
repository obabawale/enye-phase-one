const Profile = (props) => {
    return(
        <div className="profile-profile">
            <h1>Name: {props.profile.FirstName} {props.profile.LastName}</h1>
            <h3>Gender: {props.profile.Gender}</h3>
            <h5>Email: {props.profile.Email}</h5>
        </div>
    )
}

export default Profile;