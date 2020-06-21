const User = {
    // 1 user can have n posts
    // 1 user can have n comments
    posts(parent, args, { database: { posts } }, info) {
        return posts.filter((post) => {
            return post.userId === parent.id
        })
    },
    comments(parent, args, { database: { comments } }, info) {
        return comments.filter((comment) => {
            return comment.userId === parent.id
        })
    },
}

export default User
