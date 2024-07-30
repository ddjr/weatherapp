export interface Weather {
	id: number;
	city: string;
	local_temp: number;
	weather: string;
}

export let WeatherData: Weather[] = [
	{
		id: 1,
		city: 'New York',
		local_temp: 28,
		weather: 'Sunny',
	},
	{
		id: 2,
		city: 'Los Angeles',
		local_temp: 25,
		weather: 'Clear',
	},
	{
		id: 3,
		city: 'Chicago',
		local_temp: 22,
		weather: 'Cloudy',
	},
	{
		id: 4,
		city: 'Houston',
		local_temp: 30,
		weather: 'Humid',
	},
	{
		id: 5,
		city: 'Phoenix',
		local_temp: 35,
		weather: 'Hot',
	},
	{
		id: 6,
		city: 'Philadelphia',
		local_temp: 27,
		weather: 'Breezy',
	},
	{
		id: 7,
		city: 'San Antonio',
		local_temp: 29,
		weather: 'Muggy',
	},
	{
		id: 8,
		city: 'San Diego',
		local_temp: 24,
		weather: 'Mild',
	},
	{
		id: 9,
		city: 'Dallas',
		local_temp: 31,
		weather: 'Hot',
	},
	{
		id: 10,
		city: 'San Jose',
		local_temp: 26,
		weather: 'Pleasant',
	},
]
