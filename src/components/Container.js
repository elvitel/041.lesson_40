import data from '../data.json';

const Container = ({ id }) => {

    const index = data.findIndex(elem => elem.id === Number(id));
        
    return (
        <div style={{ backgroundColor: 'grey', width: '80%' }}>
            <p style={{ margin: '10px' }}>{data[index].text}</p>
        </div>
    );
}

export default Container;