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
  }

  update(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  render() {
    if (!this.props.brewery) {
      return (
        <div className="loading">
          Loading...
        </div>
      )
    } else {
      return (
        <div className="beer-form-container">
          <div className="beer-form-instructions">
            <h1>Add New Beer</h1>
            <p>Use this form to add a new beer.</p>
            <p>Beer Creation Guidelines</p>
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
          <form className="beer-form">
            <label>BEER NAME</label>
              <input type="text"
                value={this.state.beer_name}
                onChange={this.update("beer_name")}
              />
            <label>BREWERY NAME
            <input type="text"
                value={this.props.brewery.brewery_name}
                disabled
              />
            </label>
            <label>ABV
              <input type="number"
                value={this.state.abv}
                onChange={this.update("abv")}
              />
            </label>
            <label>IBU
            <input type="number"
                value={this.state.ibu}
                onChange={this.update("ibu")}
              />
            </label>
            <label>STYLE
              <input type="text"
                value={this.state.style}
                onChange={this.update("style")}
              />
            </label>
            <label>DESCRIPTION
              <textarea cols="30" rows="10"
                value={this.state.description}
                onChange={this.update("description")}
              ></textarea>
            </label>
            <button className="beer-form-btn" onSubmit={this.handleSubmit}>Add New Beer</button>
          </form>
        </div>
      )
    }
  }
}

export default BeerForm;