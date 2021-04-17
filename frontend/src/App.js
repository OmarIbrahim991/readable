import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'
import Home from './pages/Home'


const store = createStore(reducer, middleware)

const App = () => {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	)
}

export default App
