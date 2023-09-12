export default function Post (post){
    const allPost = post.post;
    const {id,title,body} = allPost;
    console.log(post.post);
    return (
        <div className="post">
            <p>UserId:{id}</p>
            <h3>Title:{title}</h3>
            <p>Body:{body}</p>
        </div>
    )
}