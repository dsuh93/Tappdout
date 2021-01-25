import React from 'react';

class BeerEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.beer;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBeer(this.props.beerId)
      .then( () => this.setState(this.props.beer))
  }

  handleSubmit(e) {
    e.preventDefault();
    const beer = Object.assign({}, this.state);
    this.props.updateBeer(beer)
      .then(() => this.props.history.push(`/beers/${this.props.match.params.beerId}`))
  }

  update(key) {
    return (e) => {
      if (key === "abv" || key === "ibu") {
        const intVal = parseInt(e.target.value);
        this.setState({[key]: intVal})
      } else {
        this.setState({[key]: e.target.value})
      }
    }
  }



  render() {
    const beer = this.state;
    if(!beer && !this.props.beer) {
      return (
        <div className="loading">
          Fetching Form...
        </div>
      )
    } else {
      return (
        <div className="beer-form-container">
          <div className="beer-form-instructions">
            <h1>Propose an Edit</h1>
            <p>Did you notice something incorrect with the details of this beer? Help us out by proposing an edit. Once submitted, our team will review and make the change if necessary.</p>
          </div>
          <form  onSubmit={this.handleSubmit} className="beer-form">
            <label>BEER NAME</label>
              <input type="text"
                value={beer ? beer.beer_name : this.props.beer.beer_name}
                onChange={this.update("beer_name")}
              />
            <label>BREWERY NAME</label>
            <input type="text"
                value={beer ? beer.brewery_name : this.props.beer.brewery_name}
                disabled
              />
            <div className="beer-form-3">
              <div>
                <label>ABV</label>
                  <input type="number"
                    value={beer ? beer.abv : this.props.beer.abv}
                    onChange={this.update("abv")}
                  />
              </div>
              <div>
                <label>IBU</label>
                <input type="number"
                    value={beer ? beer.ibu : this.props.beer.ibu}
                    onChange={this.update("ibu")}
                  />
              </div>
              <div className="beer-form-style-div">
                <label>STYLE</label>
                  <select id="beer-form-style"
                    type="text"
                    onChange={this.update("style")}>
                      <option value>Select a Style</option>
                      <option value="American Wild Ale">American Wild Ale</option>
                      <option value="Belgian Blonde">Belgian Blonde</option>
                      <option value="Black and Tan">Black and Tan</option>
                      <option value="Brown Ale">Brown Ale</option>
                      <option value="Cider">Cider</option>
                      <option value="Dark Ale">Dark Ale</option>
                      <option value="Farmhouse Ale">Farmhouse Ale</option>
                      <option value="Fruit Beer">Fruit Beer</option>
                      <option value="Ginger Beer">Ginger Beer</option>
                      <option value="Happoshu">Happoshu</option>
                      <option value="Hard Seltzer">Hard Seltzer</option>
                      <option value="Hefeweizen">Hefeweizen</option>
                      <option value="IPA - American">IPA - American</option>
                      <option value="IPA - Belgian">IPA - Belgian</option>
                      <option value="IPA - Black">IPA - Black</option>
                      <option value="IPA - English">IPA - English</option>
                      <option value="IPA - Imperial">IPA - Imperial</option>
                      <option value="IPA - Sour">IPA - Sour</option>
                      <option value="IPA - White">IPA - White</option>
                      <option value="Lager - American">Lager - American</option>
                      <option value="Lager - Dark">Lager - Dark</option>
                      <option value="Lager - Pale">Lager - Pale</option>
                      <option value="Lager - Winter">Lager - Winter</option>
                      <option value="Malt Beer">Malt Beer</option>
                      <option value="Malt Liquor">Malt Liquor</option>
                      <option value="Mead">Mead</option>
                      <option value="Old Ale">Old Ale</option>
                      <option value="Pale Ale">Pale Ale</option>
                      <option value="Pilsner">Pilsner</option>
                      <option value="Porter">Porter</option>
                      <option value="Scotch Ale">Scotch Ale</option>
                      <option value="Sour">Sour</option>
                      <option value="Stout">Stout</option>
                      <option value="Strong">Strong</option>
                      <option value="Tradition Ale">Tradition Ale</option>
                      <option value="Wheat Beer">Wheat Beer</option>
                      <option value="Winter Ale">Winter Ale</option>
                  </select>
              </div>
            </div>
            <label>DESCRIPTION</label>
              <textarea cols="30" rows="5"
                value={beer ? beer.description : this.props.beer.description}
                onChange={this.update("description")}
              ></textarea>
            <button className="beer-form-btn">Edit Beer</button>
          </form>
        </div>
      )
    }
  }
}

export default BeerEditForm;

