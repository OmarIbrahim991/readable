import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'


const App = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/posts/:id" component={PostDetails} />
		</Router>
	)
}

export default App
