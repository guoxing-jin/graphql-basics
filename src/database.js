const users = [
    {
        id: 'u1',
        name: 'Andrew',
        email: 'andrew@example.com',
    },
    {
        id: 'u2',
        name: 'Sarah',
        email: 'sarah@example.com',
    },
    {
        id: 'u3',
        name: 'Mike',
        email: 'mike@example.com',
    },
]

const posts = [
    {
        id: 'p1',
        title: 'Title of Post #1',
        body: 'Body of post #1',
        published: true,
        userId: 'u1',
    },
    {
        id: 'p2',
        title: 'Title of Post #2',
        body: 'Body of post #2',
        published: true,
        userId: 'u1',
    },
    {
        id: 'p3',
        title: 'Title of Post #3',
        body: 'Body of post #3',
        published: true,
        userId: 'u2',
    },
    {
        id: 'p4',
        title: 'Title of Post #4',
        body: 'Body of post #4',
        published: true,
        userId: 'u3',
    },
]

const comments = [
    {
        id: 'c1',
        text: 'Comment #1',
        userId: 'u1',
        postId: 'p1',
    },
    {
        id: 'c2',
        text: 'Comment #2',
        userId: 'u1',
        postId: 'p2',
    },
    {
        id: 'c3',
        text: 'Comment #3',
        userId: 'u2',
        postId: 'p2',
    },
    {
        id: 'c4',
        text: 'Comment #4',
        userId: 'u3',
        postId: 'p3',
    },
    {
        id: 'c5',
        text: 'Comment #5',
        userId: 'u1',
        postId: 'p4',
    },
]

const database = {
    users,
    posts,
    comments,
}

export default database
