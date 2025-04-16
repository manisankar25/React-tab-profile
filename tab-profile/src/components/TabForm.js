import { use, useState } from 'react'
import Interests from "./interests";
import Profile from "./profile";
import Settings from "./setting";
import '../App.css'
const TabForm = () => {
    console.log('tes');

    const [compRendet, setCompRender] = useState(0);
    const [data, setData] = useState({
        name: '',
        age: '',
        email: '',
        interests: [],
    })

    const tabs = [
        {
            name: 'Profile',
            componentToLoad: <Profile data={data} setData={setData} />
        },
        {
            name: 'Interest',
            componentToLoad: <Interests data={data} setData={setData}/>
        },
        {
            name: 'Settings',
            componentToLoad: <Settings />
        }
    ]
    console.log('data', data)

    return <div>
        <h1>Tab Form</h1>
        <div className="headings">
            {tabs.map((com, index) => <div
                className="childHeading"
                key={index}
                onClick={() => setCompRender(index)}>
                {com.name}
            </div>)}
        </div>
        <div className='body'>
            {tabs[compRendet].componentToLoad}

        </div>
    </div>
}

export default TabForm;