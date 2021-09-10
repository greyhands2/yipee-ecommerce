import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';


import CollectionItem from '../../components/collection-item/collection-item.component';
import  './collection.styles.scss';


const CollectionPage = ({collection}) =>{
// useEffect(()=>{
 
//     //in useEffect we are also able to return a function, it is called a clean-up function and it is what useEffect calls when the component unmounts, so as u can already guess it's the useEffect way of calling componentWillUnmount()

//     return () =>{

//     }
//     // remember we only pass an empty array to useEffect when we want what's in the effect to  run only when the component mounts for the first time
// }, [])
    
    const {title, items} = collection;
   
   return (<div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>);
}

const mapStateToProps = (state, ownProps) =>({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);