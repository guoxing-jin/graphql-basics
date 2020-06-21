const Query = {
    // parameters: parent, arguments, context, info
    users(parent, { searchTerm }, { database: { users } }, info) {
        if (!searchTerm) {
            return users
        }

        return users.filter((user) => {
            return user.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    },
    posts(parent, { searchTerm }, { database: { posts } }, info) {
        if (!searchTerm) {
            return posts
        }

        return posts.filter((post) => {
            const titleMatches = post.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            const bodyMatches = post.body
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

            return titleMatches || bodyMatches
        })
    },
    comments(parent, args, { database: { comments } }, info) {
        return comments
    },
}

export default Query
