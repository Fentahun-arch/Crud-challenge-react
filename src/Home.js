import Feed from './Feed';
import { useContext } from 'react';
import DataContext from './context/DataContext';
const Home = () => {
    const{ searchResults, fecthError, isLoading }  = useContext(DataContext);
    return (
        <main className="Home">
            {
                isLoading && <p className='statusMsg'>Loading posts...</p>
            }
            {!isLoading && fecthError && <p className='statusMsg' style={ { color: "red" } }>{ fecthError }</p> }
            { !isLoading && !fecthError && (searchResults.length ? <Feed posts={ searchResults } />
            :<p className='statusMsg'>No posts to display</p>) }
        </main>
    )
}

export default Home