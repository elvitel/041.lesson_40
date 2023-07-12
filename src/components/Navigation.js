import data from '../data.json';

const Navigation = ({ onClick }) => {

    const handleIdChange = (event) => {
        onClick(event.target.id);
    }
  
    return (
        <nav style={{ backgroundColor: '#61dafb', width: '20%', display: 'flex', flexDirection: 'column' }}> 
            {data.map(elem => (
                <p key={elem.id} id={elem.id} onClick={handleIdChange} style={{ margin: '10px', cursor: 'pointer', color: 'white' }}>{elem.nav}</p>
            ))}          
        </nav>
    );
}

export default Navigation;