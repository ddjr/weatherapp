'use client'

import React, { useState, useMemo } from 'react'
import { WeatherData } from './weatherData'
import WeatherTable from './weatherTable'

function App() {
  const [temp, setTemp] = useState<"C" | "F">("C")
	const [filterString, setFilterString] = useState('')
  const [favorites, setFavorites] = useState(new Set<number>())

	const filteredWeatherData = useMemo(
		() => WeatherData.filter(({ city }) => city.toLowerCase().includes(filterString.toLowerCase())),
		[WeatherData, filterString, favorites]
	)
	const favoriteCities = useMemo(() => filteredWeatherData.filter(({ id }) => favorites.has(id)), [
		filteredWeatherData,
		favorites,
	])
	return (
		<div className='bg-white w-[800px] mt-24 h-fit rounded-sm'>
			<div className='m-5 flex flex-col space-y-2 '>
        <div className='flex space-x-5'>
          <input
            type='text'
            value={filterString}
            onChange={(e) => setFilterString(e.target.value)}
            placeholder='search...'
            className='bg-slate-100 border mb-3 flex-1 focus: outline-none py-1 px-2 rounded-sm'
            />
          <button onClick={() => setFilterString("") } className='mb-3 px-5 border border-slate-200 rounded-sm'>Clear</button>
        </div>
				<WeatherTable
					title='Weather'
					WeatherData={filteredWeatherData}
					favorites={favorites}
					setFavorites={setFavorites}
          temp={temp}
				/>
        <button className='bg-slate-300 rounded-md w-fit m-auto px-5 py-1' onClick={() => setTemp(temp === "C" ? "F": "C")}>Set to {temp === "C" ? "Farenheit" : "Celsius"}</ button>
				<WeatherTable
					title='Favorites'
					WeatherData={favoriteCities}
					favorites={favorites}
					setFavorites={setFavorites}
          temp={temp}
				/>
			</div>
		</div>
	)
}

export default App
