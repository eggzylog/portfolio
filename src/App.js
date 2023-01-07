import React, { useCallback, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';
import daymode from './assets/images/daymode.png';
import nightmode from './assets/images/nightmode.png';

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			document.getElementById('html').classList.remove('light');
			setTheme('dark');
		} else {
			document.getElementById('html').classList.remove('dark');
			setTheme('light');
		}
	}

	document.getElementById('html').classList.add(theme);

	const [reactProj, setReactProj] = useState([]);
	const [jsProj, setJsProj] = useState([]);

	const getReactProjects = useCallback(async () => {
		await fetch('reactProjects.json',
			{
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json'
				}
			}
		).then(response => {
			// console.log(response);
			return response.json();
		}).then(reactProj => {
			// console.log('React Projects', reactProj);
			setReactProj(reactProj);
		}).catch(err => console.log(err));
	}, [])

	const getJsProjects = useCallback(async () => {
		await fetch('jsProjects.json',
			{
				headers: {
					'Content-type': 'application/json',
					'Accept': 'application/json'
				}
			}
		).then(response => {
			// console.log(response);
			return response.json();
		}).then(jsProj => {
			// console.log('JS Projects', jsProj);
			setJsProj(jsProj);
		}).catch(err => console.log(err));
	}, []);

	useEffect(() => {
		getReactProjects();
		getJsProjects();
	}, [getReactProjects, getJsProjects]);

	return (
		<div className={theme}>
			<Router>
				<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
					<Container>
						<Navbar.Brand as={Link} to='/'>
							<div className="bouncing-text">
								<div className="j">J</div>
								<div className="v">V</div>
								<div className="l">L</div>
							</div>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='responsive-navbar-nav' />
						<Navbar.Collapse id='responsive-navbar-nav'>
							<Nav className='me-auto'>
								<Nav.Link as={Link} to='/'>Home</Nav.Link>
								<Nav.Link as={Link} to='/about'>About</Nav.Link>
								<Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
								<Nav.Link as={Link} to='/experience'>Experiences</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
								<button onClick={toggleTheme} title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}>
									<img src={theme === 'light' ? nightmode : daymode} alt="night mode" className='display-mode' />
								</button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/projects' element={<Projects theme={theme} reactProj={reactProj} jsProj={jsProj} />}></Route>
					<Route path='/experience' element={<Experience />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;