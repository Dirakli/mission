import { useState } from 'react';

import Greeting from '../../components/Greeting';
import Welcome from '../../components/Welcome';


const HomeContent = () => {
    const [showWelcome, setShowWelcome] = useState(false);

    const renderContent = () => {
        let content;

        if(showWelcome) {
            content = <Greeting title="title" subtitle="subtitle" />;
        } else {
            content = <Welcome user="James Bond" age="7" />;  
        }
        return content;
    };

const handleClick = () => {
    console.log('__showWelcome__', showWelcome);
    setShowWelcome(!showWelcome);
}
    return (
    <>
    <button className='btn btn-outline-primary' onClick={handleClick} >do something</button>
    <hr />
    {renderContent()}
    </>
    )

}

export default HomeContent;