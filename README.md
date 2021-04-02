# Tappdout Social Networking Site for Beer
![tappdout logo](https://github.com/dsuh93/Tappdout/blob/main/app/assets/images/tappdout.jpg)
---
Tappdout is a platform for beer afficionados and beer novices alike, here to satisfy the critics and curious inner-child inside all of us when it comes to whether or not we want to try that new beer from the brewery that's around the corner. 

# Check-in!
<img width="200px" src="https://media.giphy.com/media/ietk9bNd6xIsOdXJHo/giphy.gif">

`And check out our live site, browse responsibly:` [Tappdout](https://tappdout.herokuapp.com/#/ "cheers!")

# Features
- Create a personal account to sign up, or click the demo login button to quickly get started
- View another user's check-in
- Create a beer and add it to the database
- Check-in any beer and give it a rating and add a photo

# Development
We've gone ahead and calculated the average ratings for you and displayed them in a ratings bar that is easy to interpret
- the behind-the-scenes
```javascript
  displayRating() {
    let r = this.props.rating;
    if (r % 1 != 0 && r % 1 != 0.25 && r % 1 != 0.5 && r % 1 != 0.75 ) {
      r = Math.floor(r);
    }
    let imageArray = [];
    for(let i = 1; i <= 5; i++) {
      if ( i <= r ) {
        imageArray.push( <img key={r + i} id="cap" src={window.capFull}/> )
      } else if ( r < i && i === Math.ceil(r)) {
        if ( r % 1 === 0.25) {
          imageArray.push( <img key={r + i} id="cap" src={window.capFQ}/> )
        } else if ( r % 1 === 0.5) {
          imageArray.push( <img key={r + i} id="cap" src={window.capHalf}/> )
        } else if ( r % 1 === 0.75) {
          imageArray.push( <img key={r + i} id="cap" src={window.capLQ}/> )
        } 
      } else {
        imageArray.push( <img key={r + i} id="cap" src={window.capEmpty}/> )
      }
    }
    return imageArray;
  }
```
- the result:  ![avg ratings bar](https://github.com/dsuh93/Tappdout/blob/main/app/assets/images/avg%20rating%20example.PNG)

# Technologies
Tappdout was build on a stack using Ruby on Rails and PostgreSQL for backend framework, and Javascript, specifically React and Redux for the frontend components. Majority of the styling was done with SCSS. AWS was used to store and access image assets.

# Another Round!
Look forward to these new features to be added soon to your Tappdout experience:
- Create a checkin, add a photo, description, and rating
- Comment on any check-in
- Toast other users check-ins
- Search for beers and breweries from any page using the search function in the navigation bar
- A profile page for you to view your past and present check-ins

# Issues
Feel free to open an issue on this repo if you come into contact with any bugs or if you have suggestions to enhance the Tappdout experience

