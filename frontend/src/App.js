import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleLoadInitialData } from './actions/shared'
import EditPost from './components/EditPost'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'


const App = () => {
	const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(handleLoadInitialData())
	}, [dispatch])

	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/posts/:id" component={PostDetails} />
			<Route exact path="/editpost/:id" component={EditPost} />
		</Router>
	)
}

export default App
