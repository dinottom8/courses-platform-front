import Header from '../components/Header'
import LastLessons from '../components/LastLessons'
import Lesson from '../components/Lesson'

export default function Home() {
    return (
        <>
            <Header></Header>
            <main className="container">
                <LastLessons></LastLessons>
                <Lesson></Lesson>
            </main>
        </>
    )
}