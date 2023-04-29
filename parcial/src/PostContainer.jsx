const PostsContainer = () => {
    const { dispatch } = useContext(ReduxContext);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(setPosts(data)));
    }, [dispatch]);
  
    return <PostsList />;
  };
  
  const PostsList = () => {
    const { posts } = useContext(ReduxContext);
  
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  };
  