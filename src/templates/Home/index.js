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
  postPerPage:3
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
    const { posts, page, postPerPage, allPosts } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length;

    return(
      <section className='container'>
        <Posts posts={posts}/>
        <div className='button-container'>
          <Button 
            text="Carregar ..."
            onClick={this.loadMorePost}
            disabled={noMorePosts}
          />
        </div>
        
      </section>
    
    );
  }
}


export default Home;
