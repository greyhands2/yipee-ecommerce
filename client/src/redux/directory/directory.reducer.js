const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332__480.jpg',
            color: '#FF5733',
            id:1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190851__480.jpg',
            color: '#2196f3',
            id:2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687__480.jpg',
            color: '#6200ea',
            id:3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/04/01/17/00/mother-and-daughter-3281388_1280.jpg',
            size: 'large',
            color: '#FF69B4',
            id:4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__480.jpg',
            size: 'large',
            color: '#e040fb',
            id:5,
            linkUrl: 'shop/mens'
        }
        

    ]
};

const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        default: return state;
    }
};

export default directoryReducer;
