import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	function removeFromCart(name, price) {
		const plantToRemove = cart.find((plant) => plant.name === name)
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		if (plantToRemove.amount === 1) {
			updateCart(cartFilteredCurrentPlant);
		} else {
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: plantToRemove.amount - 1 }
			])
		}
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map((item, index) => (
							<>
								<div key={`${item.name}-${index}`}>
									{item.name} {item.price}€ x {item.amount}
									<button type='button' onClick={() => removeFromCart(item.name, item.price)}>X</button>
								</div>
							</>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart