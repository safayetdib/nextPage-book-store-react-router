import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<Outlet />
			{/* footer */}
		</div>
	);
}

export default App;
