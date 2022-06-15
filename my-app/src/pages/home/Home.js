import HomeContent from './HomeContent';
import './home.css'


export const Home = (props) => {
    return (
        <div className="col-12 my-3">
            <HomeContent />
            <HomeContent />
        </div>
    )
}