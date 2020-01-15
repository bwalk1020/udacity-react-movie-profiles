import React, {Component} from 'react'

class ListProfiles extends Component {
	render(){
    	const profiles = this.props.profiles;
        const users = this.props.users;
        const movies = this.props.movies;
        
        return ( 
        	<ul>
            	{profiles.map( profile => (
						 <li key={profile.id}> 
                         	{users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}
                         </li>               
                	)
                )}
            	
            </ul>
        )
    }
}

export default ListProfiles