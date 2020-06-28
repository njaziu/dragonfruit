import React, {Component} from 'react'
import styles from "../css/countries.module.css"
import {FaMap} from 'react-icons/fa'


class CountriesFilter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        countries: [],
        country: "all"
      };
    }  
    handleChangeCourse = event => {
      this.setState({ country: event.target.value });
    };
  
    getUnique(arr, comp) {
      const unique = arr
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);
      return unique;
    }
  
    componentDidMount() {
      const contriesData = require("../data/countries.json");
      this.setState({ countries: contriesData });
    }
  
    render() {
      const uniqueCouse = this.getUnique(this.state.countries, "country");
      const countries = this.state.countries;
      const country = this.state.country;
  
      const filterDropdown = countries.filter(function(result) {
        if(country === 'all'){
          return result;
        }
        return result.country === country;
      });
  
      return (
        <div className="container">
          <div className={styles.submitForm}>
            <form onSubmit={this.handleSubmitCourse}>
              <div className={styles.dropdownFilter}>
                <label>
                  <select className={styles.selectCss}
                    value={this.state.country}
                    onChange={this.handleChangeCourse}
                  >
                    <option value="all">All</option>
                    {uniqueCouse.map(country => (
                      <option key={country.id} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              
              <div className={styles.cardsContainer}>
                {filterDropdown.map(country => (
                  <article className={styles.tour} key={country.id}>
                  <div className={styles.imgContainer}>
                      <img src={country.image} alt={country.id} className={styles.img}/>
                  </div>
                  <div className={styles.footer}>
                      <h3>{country.name}</h3>
                      <div className={styles.info}>
                          <h4 className={styles.country}>
                              <FaMap className={styles.icon} />
                              {country.country}
                          </h4>
                          <div className={styles.details}>
                              <p>{country.content}</p>
                          </div>
                      </div>
                  </div>
                </article>
                ))}
              </div>
            </form>
          </div>
        </div>
      );
    }
  }


export default CountriesFilter
