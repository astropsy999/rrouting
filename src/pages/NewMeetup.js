import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage () {
    const navigate = useNavigate()
    const addMeetupHandler = (meetupData) => {
        fetch('https://rrouting-8619c-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/')
        })

    }
    return <section>
        <h1>Додати зустріч</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>

}

export default NewMeetupPage;