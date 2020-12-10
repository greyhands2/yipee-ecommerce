import React from 'react';
// to be able to acess the history.push function deep here for navigation where it is actually needed we use withRouter instead of passing down the history.push as a props all through till it gets to this page where it is needed
import {withRouter} from 'react-router-dom';
import './menu-items.styles.scss';

const MenuItems = ({title, imageUrl, size, color, history, linkUrl, match}) => (

    <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>

        <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>

	    <div className="content" style={{border: `1px solid ${color}`}}>
            <h1 className="title" style={{color: `${color}` }}>{title.toUpperCase()}</h1>
				
                <span className="subtitle">Shop Now</span>
		</div>
	</div>
);

export default withRouter(MenuItems);