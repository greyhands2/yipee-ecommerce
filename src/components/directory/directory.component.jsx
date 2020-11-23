import React from 'react';
import './directory.styles.scss';
import MenuItems from '../menu-item/menu-items.component';

class Directory extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    color: '#FF5733',
                    id:1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    color: '#2196f3',
                    id:2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    color: '#6200ea',
                    id:3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    color: '#FF69B4',
                    id:4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    color: '#e040fb',
                    id:5,
                    linkUrl: ''
                }
                

            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
               {
            //    this.state.sections.map(({title, imageUrl, id, size, color,  linkUrl})=>(
            //     <MenuItems title={title} key={id} imageUrl={imageUrl} size={size} color={color} linkUrl={linkUrl}/>

            //    ))
            //or
            this.state.sections.map(({id, ...otherSectionPropz})=>  
               <MenuItems  key={id} {...otherSectionPropz}/>
               
            )
                
                }
               
            </div>
        );
    }


}

export default Directory;

