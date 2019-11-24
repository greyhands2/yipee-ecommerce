import React from 'react';

import './menu-items.styles.scss';

const MenuItems = ({title, imageUrl, size, color}) => (

    <div   className={`${size} menu-item`}>

        <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>

	    <div className="content" style={{border: `1px solid ${color}`}}>
            <h1 className="title" style={{color: `${color}` }}>{title.toUpperCase()}</h1>
				
                <span className="subtitle">Shop Now</span>
		</div>
	</div>
);

export default MenuItems;