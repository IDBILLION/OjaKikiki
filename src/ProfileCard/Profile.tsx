import { useState } from "react"

function Profile () {
    const initialValue = {name: "", title: "", bio: ""};
   const [details, setDetails] = useState(initialValue);
   
    return (
        <>
        <div className="card">
<h2>{name}</h2>
<p className="card-title">{title}</p>
<p>{bio}</p>
        </div>
        <Profile name="Idris" title="Frontend Developer" bio="I like it here" />
        </>
    )
} export default Profile;
