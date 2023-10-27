function Form ({setSearch}) {
    return (
        <form className='app-form'>
            <input type='text' 
                id='app-name' 
                className='app-text' 
                autoComplete='off' 
                placeholder='Search for a product. . .'
                onChange={(e) => setSearch(e.target.value)} 
            />
        </form>
    );
}

export default Form;