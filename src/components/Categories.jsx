import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {

	const handleChange = (event) => {
		const values = Array.from(event.target.selectedOptions, option => option.value);
		setActiveCategory(values);
	};

	return (
		<div className='lmj-categories'>
			<select
				multiple
				value={activeCategory}
				onChange={handleChange}
				className='lmj-categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory([])}>Réinitialiser</button>
		</div>
	)
}

export default Categories