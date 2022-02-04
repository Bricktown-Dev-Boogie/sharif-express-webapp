const INITIAL_STATE = {
    sections: [
      {
        title: 'SOUPS',
        imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2018/09/Easy-Chicken-Noodle-Soup-Recipe-1200.jpg',
        id: 1,
        linkUrl: 'shop/soups'
      },
      {
        title: 'SIDES',
        imageUrl: 'https://www.sweetandsavorybyshinee.com/wp-content/uploads/2014/07/Baked-Steak-Fries-3-650x975.jpg',
        id: 2,
        linkUrl: 'shop/sides'
      },
      {
        title: 'SPECIALS',
        imageUrl: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/18745-italian-chicken-wraps-600x600.jpg?ext=.jpg',
        id: 3,
        linkUrl: 'shop/specials'
      },
      {
        title: 'CHICKEN',
        imageUrl: 'https://www.thefoodinmybeard.com/content/sandwich/tikkachickensteak/cholulachicsandwich19.JPG?ezimgfmt=rs:615x410/rscb1/ng:webp/ngcb1',
        size: 'large',
        id: 4,
        linkUrl: 'shop/chicken'
      },
      {
        title: 'BEEF',
        imageUrl: 'https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2020/01/Philly-Cheesesteak-Recipe-18.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/beef'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
  