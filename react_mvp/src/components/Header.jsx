function Header({onHomeClick, onAddBookClick}) {
    function handleClick() {
        onHomeClick()
    }
    function handleAddClick() {
        onAddBookClick()
    }
     return (
        <header className="header">
            <button className="header-btn" onClick={handleClick}>Thinking Caps</button>
            <div className="logo">
            <h3 className="app-title">
                <img className="beanie" src="beanie.png" alt="" />
            </h3>
            </div>
            <button className="header-add" onClick={handleAddClick}>+</button>
        </header>
    )
}

export default Header