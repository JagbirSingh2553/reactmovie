import React, { Component } from 'react' ; 
import {API_URL, API_KEY } from '../../config';


class Trailer extends Component {
    state = {
        movie: null,
        trailerId:this.props.movieId,
        loading: false
    }
    componentDidMount(){
        this.setState({ loading: true })
        //first fetch the movie
        const endpoint = `${API_URL}movie/id=${this.trailerId}/videos?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }
    fetchItems = (endpoint) => {
        fetch(endpoint) 
        .then(result => result.json())
        .then(result => {
            console.log(result);
            // if(result.status_code){
            //     this.setState({loading: false});
            // }else{
            //     this.setState({tvshows: result }, () => {
            //         //... then fetch actors in the setstate call back function
            //         const endpoint = `${API_URL}tv/${this.props.match.params.tvshowId}/credits?api_key=${API_KEY}`;
            //         fetch(endpoint)
            //         .then(result => result.json())
            //         .then(result => {
            //             const directors = result.crew.filter((member)=> member.job === "Director");

            //             this.setState({
            //                 actors: result.cast,
            //                 directors,
            //                 loading: false
            //             })
            //         })
            //     })
            // }
        })
        .catch(error => console.error('ERROR:',error))
    }
    
        render (){
            return(
                <div>
                     
                </div>
               
            )
        }
            
 
}
export default Trailer;