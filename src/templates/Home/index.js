import './styles.css';
import { Component } from 'react';

import { loadPosts } from '../../utils/load-post';
import { Posts } from '../../component/Posts';
import { Button } from '../../component/Button';

class Home extends Component{
 state ={
  posts:[],
  allPosts:[],
  page:0,
  postPerPage:2
 };

  componentDidMount(){  
    this.loadPost();  
        
  }

  loadPost = async () =>{
    const {page, postPerPage} = this.state;
    const postAndPhotosJson = await loadPosts();
    this.setState({
      posts: postAndPhotosJson.slice(page,postPerPage),
      allPosts: postAndPhotosJson
    
    })
  }

  loadMorePost = () =>{
    const{
      page,
      postPerPage,
      allPosts,
      posts,
    }= this.state;
    const nextPage = page + postPerPage;
    const  nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page:nextPage});
  }

  render(){
    const { posts } = this.state; 
    return(
      <section className='container'>
        <Posts posts={posts}/>
        <Button 
          text="Carregar ..."
          onClick={this.loadMorePost}
        />
      </section>
    
    );
  }
}


export default Home;
