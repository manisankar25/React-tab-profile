const Interests = ({ data, setData }) => {
    const handleCheckEvent = (field) => {
        let fillArray = []
        console.log('terst');
        if (data.interests.includes(field)) {
            fillArray = data.interests.filter((item) => {
                return item !== field
            })

            setData(prev => {
                return {
                    ...prev,
                    interests: fillArray
                }
            })
        } else {
            setData(prev => {
                return {
                    ...prev,
                    interests: [...data.interests,field]
                }
            })
        }
    }
    return <div>
        <label>javascript</label>
        <input type="checkbox"
            checked={data.interests.includes('javascript') ? true : false}
            onChange={() => handleCheckEvent('javascript')}></input>
        <label>React</label>
        <input type="checkbox"
            checked={data.interests.includes('React') ? true : false}
            onChange={() => handleCheckEvent('React')}></input>
        <label>Nodejs</label>
        <input type="checkbox"
            checked={data.interests.includes('Nodejs') ? true : false}
            onChange={() => handleCheckEvent('Nodejs')}></input>
    </div>
}

export default Interests;