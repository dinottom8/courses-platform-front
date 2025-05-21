import '../styles/lesson.css';
import Button from '../elements/Button'
import LessonComments from '../components/LessonComments'

export default function Lesson() {
    return (
        <section className="lesson-container">
            <div className='lesson-wrapper'>
                <div className='lesson-video-wrapper'>
                    video wrapper
                </div>
                <div className='lesson-description-wrapper'>
                    <h3>Concordância Verbal</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quia facere sapiente, omnis in est? Molestiae, pariatur ipsam! Omnis numquam necessitatibus fuga. Deserunt atque fugiat expedita. Aspernatur minima nostrum consectetur?</p>
                </div>
            </div>
            <div className='lesson-buttons'>
                <Button content={'PDF'} type={'button'} set={'secondary'}></Button>
                <Button content={'Questões'} type={'button'} set={'secondary'}></Button>
                <Button content={'Gabarito'} type={'button'} set={'secondary'}></Button>
            </div>
            <div className='lesson-comments'>
                <LessonComments></LessonComments>
            </div>
        </section>
    )
}