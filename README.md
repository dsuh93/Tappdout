# Tappdout Social Networking Site for Beer
![tappdout logo](https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/142710740_171244464756626_3543394188550254900_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=K_opR1bJDuEAX8RX_Xm&_nc_ht=scontent-lga3-2.xx&oh=4827405eab574884243182d3daf95384&oe=6038B4E6)
Tappdout is a platform for beer afficionados and beer novices alike, here to satisfy the critics and curious inner-child inside all of us when it comes to whether or not we want to try that new beer from the brewery that's around the corner. 

# Check-in!
![gif of beer](https://media.giphy.com/media/ietk9bNd6xIsOdXJHo/giphy.gif | width=100)

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
- the result
![]()
# Another Round!
Look forward to these new features to be added soon to your Tappdout experience:
- Comment on a check-in
- Toast other users check-ins
- Search for beers and breweries from any page using the search function in the navigation bar
- A profile page for you to view your past and present check-ins
- Add friends and build your beer-loving community

