import React from 'react';

class BeerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer_name: "",
      brewery_id: this.props.match.params.breweryId,
      abv: "",
      ibu: "",
      style: "",
      description: "" 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBrewery(this.props.match.params.breweryId)
  }

  handleSubmit(e) {
    e.preventDefault();
    const beer = Object.assign({}, this.state)
    this.props.createBeer(beer)
      .then(() => this.props.history.push(`/breweries/${this.props.match.params.breweryId}`))
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
    const errors = this.props.errors.map( error => {
      return (
        <li key={error}>{error}</li>
      )
    })
    const errorsClassname = this.props.errors.length > 0 ? "beer-form-errors-reveal" : "hidden";

    const brewery = this.props.brewery;
    if (!this.props.brewery) {
      return (
        <div className="loading">
          Loading...
        </div>
      )
    } else {
      return (
        <div className="beer-form-page">
          <div className="beer-form-container">
            <div className="beer-form-instructions">
              <h1>Add New Beer</h1>
              <p>Use this form to add a new beer.</p>
              <p id="ul-title">Beer Creation Guidelines</p>
              <ul>
                <li>Don't include the brewery in the beer name.</li>
                <li>Only add the vintage year if the year is part of the label artwork. "Bottled On" and "Best Before" dates are not valid for this.</li>
                <li>Please make your beer name proper case.</li>
                <li>Do not create a beer that are blends of 2 or more beers. This goes for any beers that are blended at a Bar/Brewery after kegging.</li>
                <li>Give your homebrew an original name, don't use another name for beer that is commerical to avoid confusion.</li>
                <li>For homebrews, please create your own brewery name, do not use another Homebrewery that has already been created that isn't your brewery.</li>
                <li>Homebrew clones are not allowed. Always give your beer a unique name - do not use the name of the kit or the recipe.</li>
                <li>Please do not add non-supported drinks (Wine, Water, etc) to Untappd. You can find out what drinks are supported here.</li>
                <li>Have more questions about more our Beer Naming Standards? Please read this guide.</li>
                <li>Please note that by not following these guidelines may results in revoking of your Beer Creation privileges.</li>
              </ul>
            </div>
            <ul className={errorsClassname}>
              {errors}
            </ul>
            <form  onSubmit={this.handleSubmit} className="beer-form">
              <label>BEER NAME</label>
                <input type="text"
                  value={this.state.beer_name}
                  onChange={this.update("beer_name")}
                />
              <label>BREWERY NAME</label>
              <input type="text"
                  value={this.props.brewery.brewery_name}
                  disabled
                />
              <div className="beer-form-3">
                <div>
                  <label>ABV</label>
                    <input type="number"
                      value={this.state.abv}
                      onChange={this.update("abv")}
                    />
                </div>
                <div>
                  <label>IBU</label>
                  <input type="number"
                      value={this.state.ibu}
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
                        <option value="Blonde Ale">Blonde Ale</option>
                        <option value="Brown Ale">Brown Ale</option>
                        <option value="Cider">Cider</option>
                        <option value="Dark Ale">Dark Ale</option>
                        <option value="Farmhouse Ale">Farmhouse Ale</option>
                        <option value="Fruit Beer">Fruit Beer</option>
                        <option value="German Ale">German Ale</option>
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
                    <div className="select-arrow-down"></div>
                </div>
              </div>
              <label>DESCRIPTION</label>
                <textarea cols="30" rows="5"
                  value={this.state.description}
                  onChange={this.update("description")}
                ></textarea>
              <button className="beer-form-btn">Add New Beer</button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default BeerForm;