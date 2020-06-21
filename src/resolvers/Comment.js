const Comment = {
    // 1 comment only belongs to 1 user
    // 1 comment only belongs to 1 post
    user(parent, args, { database: { users } }, info) {
        return users.find((user) => {
            return user.id === parent.userId
        })
    },
    post(parent, args, { database: { posts } }, info) {
        return posts.find((post) => {
            return post.id === parent.postId
        })
    },
}

export default Comment
