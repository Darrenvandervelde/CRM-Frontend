import { Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Chat from './components/chat';
import Headers from './components/about/header';

function Home(){
    return(
        <main>
            <Navbar />
            <Chat />
        </main>
    )
}

export default Home;
