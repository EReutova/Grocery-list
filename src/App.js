import './App.css';
import image from "./shopping.jpeg";
import imageMan from "./man.jpeg";
import { GroseryList } from './GroseryList';

function App() {
	return (
		<div className='app'>
			<div className="center">
				<img src={image} alt="shopping" width="250px"/>
			</div>
			<div className="center">
				<h1>Grosery list</h1>
			</div>
			<GroseryList />
			<div className="center">				
				<img src={imageMan} alt="man" width="200px"/>
			</div>
		</div>
	);
}

export default App;
