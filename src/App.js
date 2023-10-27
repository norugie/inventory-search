import { useState } from 'react';
import Form from './components/form';
import Table from './components/table';
import './App.css';

function App() {
    const [search, setSearch] = useState('');

    return (
        <div className='app'>
            <h1>Product Inventory</h1>
            <Form setSearch={setSearch} />
            <Table search={search} />
        </div>
    );
}

export default App;
