export const PostCard = (props) =>{
    const {post} = props;
    return(
        <div className='post'>
            <img src={post.cover} alt={post.cover}/>
          <div key={post.id}  className="post-content">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            
          </div>
          </div>

    )
}