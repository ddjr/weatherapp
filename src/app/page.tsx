import Image from 'next/image'
import App from './app'
export default function Home() {
	return (
		<main className='overflow-y-scroll bg-slate-200 w-screen h-screen flex justify-center align-middle'>
			<App />
		</main>
	)
}
