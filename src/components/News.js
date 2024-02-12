import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'
import Spinner from './Spinner/spinner'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'General',
  }

  static PropsType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  articles = []
  constructor() {
    super();
    console.log('HELLO');
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }


    /*Fetching APT*/
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfcf853e1bc144928e8c4b72c6ae9a4f&page=1&pageSize= ${this.props.pageSize}`;
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsedData = await Data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }


  /*FUNCTIONS TO OPERATE WITH PERVIOUS AND NEXT BUTTONS */
  handlePrevClick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfcf853e1bc144928e8c4b72c6ae9a4f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let Data = await fetch(url);
    let parsedData = await Data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
    this.setState({
      page: this.state.page - 1,
      loading: false
    })
  }


  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bfcf853e1bc144928e8c4b72c6ae9a4f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let Data = await fetch(url);
      let parsedData = await Data.json()
      this.setState({ articles: parsedData.articles })
      this.setState({
        page: this.state.page + 1,
        loading: false
      })
    }
  }



  /*GENERAL CODE */

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center"> Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4 ' key={element.url} >
              <Newsitem title={element.title ? element.title.slice(0, 26) : ""} description={element.description ? element.description.slice(0, 55) : ""} imageurl={element.urlToImage} Newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}

        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
