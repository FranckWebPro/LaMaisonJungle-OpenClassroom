import CareScale from './CareScale'
import '../styles/PlantItem.css'



function PlantItem({ cover, name, water, light, price, setPlantToDisplay, isOpen, setIsOpen }) {

	const handleClick = (plantName) => {
		setPlantToDisplay(plantName);
		setIsOpen(!isOpen);
	};

	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem