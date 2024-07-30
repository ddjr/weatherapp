import React, { useEffect } from 'react'
import { Weather } from '../weatherData'

interface WeatherTableProps {
	WeatherData: Weather[];
	title?: string;
	temp: 'C' | 'F';
	favorites: Set<number>;
	setFavorites: React.Dispatch<React.SetStateAction<Set<number>>>;
}
function WeatherTable({ WeatherData, title, temp, favorites, setFavorites }: WeatherTableProps) {
	function handleClick(id: number) {
		favorites.has(id) ? favorites.delete(id) : favorites.add(id)
		setFavorites(new Set(favorites))
	}

	return (
		<table className='border-separate border-spacing-5 border border-slate-400'>
			<caption className='font-bold text-xl'>{title}</caption>
			<thead className='text-left'>
				<tr>
					<th scope='col'>City</th>
					<th scope='col'>Temp</th>
					<th scope='col'>Description</th>
					<th scope='col'>Favorite</th>
				</tr>
			</thead>
			{WeatherData.map(({ id, city, local_temp, weather }) => (
				<tbody key={id}>
					<tr>
						<td>{city}</td>
						<td>{temp === 'C' ? +local_temp.toFixed(1) : +(local_temp * 1.8 + 32).toFixed(1)}</td>
						<td>{weather}</td>
						<td
							className='bg-slate-300 py-1 w-48 rounded-md text-center cursor-pointer'
							onClick={() => handleClick(id)}
						>
							{favorites.has(id) ? 'Remove from' : 'Add to'} favorites
						</td>
					</tr>
				</tbody>
			))}
		</table>
	)
}

export default WeatherTable
