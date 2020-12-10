import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import './directory.styles.scss';
import MenuItems from '../menu-item/menu-items.component';
 
const Directory =({sections})=>( 

            <div className="directory-menu">
               {
          
            sections.map(({id, ...otherSectionPropz})=>  
               <MenuItems  key={id} {...otherSectionPropz}/>
               
            )
                
                }
               
            </div>

);
    


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

