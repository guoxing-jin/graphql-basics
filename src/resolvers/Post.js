const Post = {
    // parent is EACH post object of posts array
    // user and comments methods will be called on each post object
    // 1 post only belongs to 1 user
    // 1 post can have n comments
    user(parent, args, { database: { users } }, info) {
        return users.find((user) => {
            return user.id === parent.userId
        })
    },
    comments(parent, args, { database: { comments } }, info) {
        return comments.filter((comment) => {
            return comment.postId === parent.id
        })
    },
}

export default Post
