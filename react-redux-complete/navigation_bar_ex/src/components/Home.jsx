import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'

class Home extends Component {

    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                // console.log(res);
                this.setState({posts:res.data.slice(0,10)})
            })
    }
    render(){
        const {posts}=this.state;
        const postList=posts.length?(
            posts.map(post=>{
                return (
                <div className="post card" key={post.id} style={{margin:100,marginTop:20,marginBottom:20}}>
                    <img src={Pokeball} alt="A pokeball" />
                    <div className="card-content">
                        <Link to={'/'+post.id}><span className="card-title blue-text">{post.title}</span></Link>
                        <p>{post.body}</p>
                    </div>
                </div>)
            })
        ):(
            <div className="center">No posts</div>
        )
        return (
            <div className="conatiner home">
                 <h1 className="center">Home</h1>
                {/*<p  className="center">lorem Ips dolor sit amet, consectetur adipiscing elit. Invento sollicitudin felis, sed do eiusmod tempor incididunt ut labore</p> */}
                <div>{postList}</div>
            </div>
        )
    }
    
}

export default Home