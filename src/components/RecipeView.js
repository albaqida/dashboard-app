import React, { Component } from 'react';
import '../App.css';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import Prev from 'grommet/components/icons/base/FormPrevious';
import Next from 'grommet/components/icons/base/FormNext';

class RecipeView extends Component {

	constructor(props) {
		super(props);
		this.state = { page: 0};
		this._select = this._select.bind(this);
	}


	_select(arg){
		const {recipes} = this.props;
		let {page} = this.state;
		if(!arg) {
			if (page >= 0) page--;
			if( page< 0 ) page = 0;
			else{
				if (recipes.length > (page+1) * 20){
					page++;
				}
			}
		}
		this.setState({page});
	}
	
	/**
	 * re renders the page when props or state are updated
	 */
  render() {
	let { recipes } = this.props;
	const {page} = this.state;
	let backButton;
	let nextButton;
	if(page === 0) backButton = <Button icon={<Prev/>} />;	
	else backButton = <Button icon = {<Prev/>} onClick={() => this.select(false)}/>;
	if ((page+1)*20) <= recipes.length) {
		nextButton = <Button icon={<Next/>} />;
		recipes = recipes.slice(page*20);
	}
	else {
		nextButton = <Button icon = {<Next/>} onClick={() => this.select(true)}/>;
		recipes = recipes.slice(page*20, ((page+1) * 20));
    	}
	return (
		<Box className='recipe--view' full='horizontal'>
			<Box direction='row' justify= 'end'> 
				{backButton}
				{nextButton}
			</Box>
			<Tiles selectable={false} flush={false}>
				{recipes.map((recipe, i) => (
					<Tile className='recipe--view--tile' key={i} size='small'
					  onClick={() => window.open(recipe.source)}
					>
						<Card thumbnail={recipe.image_url} textSize='small' label={<Label size='small'>{recipe.title}</Label>} />
				  </Tile>
				))}
			</Tiles>
		</Box>
    );
  }
}

export default RecipeView;
