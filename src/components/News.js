import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

/* 6d9aabc063d84e50890bdc72333c0cff */
const News=(props)=>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews= async()=> {
        props.setProgress(10);
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pagesize}`;
        setLoading(false)
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        props.setProgress(50);
       /*  console.log(parsedData); */
       setArticles(parsedData.articles)
       setTotalResults( parsedData.totalResults)
       setLoading(false)
        props.setProgress(100);

    }
    useEffect(() => {
         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`; 
        updateNews();
        // eslint-disable-next-line
    }, []);

    /*  handlePrevClick = async ()=>{
      this.setState({ page : this.state.page-1});
      this.updateNews()
     }
  
     handleNextClick = async ()=>{
          this.setState({ page : this.state.page+1})
          this.updateNews();
  
      
     } 
   */
    const fetchMoreData = async () => {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pageSize=${props.pagesize}`;
        setPage(page + 1)
        let data = await fetch(apiUrl);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


        return (
            <div>
                <h2 className='mt-5 pt-3 text-center'>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines!</h2>
                 {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className='row'>
                            {
                                articles.map((element) => {
                                    return <div className='col-xs-12 col-md-3' key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                                    </div>

                                })
                            }

                        </div>
                    </div>

                </InfiniteScroll>
            </div>
        )
    
}
News.defaultProps = {
    country: 'in',
    pagesize: 5,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}
export default News