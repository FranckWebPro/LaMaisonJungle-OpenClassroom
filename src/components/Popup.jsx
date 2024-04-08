import '../styles/Popup.css'

function Popup({ plantToDisplay, plantList, setIsOpen, isOpen}) {

    return (
        <>
            {isOpen && plantToDisplay !== '' && plantList.map((plant) =>
                plant.name === plantToDisplay ?
                    <div className="popup" key={plant.id}>
                    <h3>{plant.name}</h3>
                    <p>{plant.category}</p>
                    <button type='button' className='closeButton' onClick={() => setIsOpen(!isOpen)}>X</button>
                </div > : null)
            }
        </>
    )
}

export default Popup