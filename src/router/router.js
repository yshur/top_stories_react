import React from 'react';
import { Route } from 'react-router-dom';
import TopBooksList from '../Components/TopBooksList';
import BestPrice from '../Components/BestPrice';
import Header from '../Components/Header';
import TopId from '../Components/TopId';

const ReactRouter =()=> {
	return (
		<React.Fragment>
			<Header />
			<Route path="/" component= {TopBooksList} />
			<Route exact path="/BestPrice" component = {BestPrice} />
			<Route exact path="/TopId" component= {TopId} />
		</React.Fragment>	
	);
}

export default ReactRouter;

