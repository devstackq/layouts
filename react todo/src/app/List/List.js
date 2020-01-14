import React, {Component} from 'react';

import Task from './Task/Task';


class List extends Component {

//method map - indexx - current value
render() {
	return (
		<div className="List">
		{this.props.todosListMap.map( (item, index ) => {
			return (
				<Task 
				key = { index }
				index= {index}

				editData={this.props.editData}		
				handleClick={this.props.handleClick	}
				nameTaskProps = {item} 
				item={item}	
				deleteData={this.props.deleteData}

				/>
				)				
		})  
	}
	
	</div>	
	);
}
}

export default List;
