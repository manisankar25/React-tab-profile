const Profile = ({data, setData}) => {

    const handleEvent = (e, field) => {
        setData(prevState => {
            return {
                ...prevState,
                [field]: e.target.value
            }
        })
    }
    return <div>
        <label>Name :</label>
        <input type="text" value={data.name} onChange={(e) => handleEvent(e, 'name')}></input>
        <label > Age: </label>
        <input type="number" value={data.number} onChange={(e) => handleEvent(e, 'age')}></input>
        <label> Email:</label>
        <input type="email" value={data.email} onChange={(e) => handleEvent(e, 'email')}></input>
    </div>
}

export default Profile;