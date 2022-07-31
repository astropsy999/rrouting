import {useRef} from 'react'

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'

function NewMeetupForm(props) {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descInputRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredTitle = titleInputRef.current.value
        const enteredImage = imageInputRef.current.value
        const enteredAddress = addressInputRef.current.value
        const enteredDesc = descInputRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDesc
        }

        props.onAddMeetup(meetupData)

    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Назва зустрічі</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Зображення</label>
                <input type="url" required id="image" ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Адреса</label>
                <input type="text" required id="address" ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Опис</label>
                <textarea id="description" required rows='5' ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions}><button>Додати</button></div>

        </form>
    </Card>
}

export default NewMeetupForm;