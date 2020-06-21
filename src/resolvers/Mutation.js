import { v4 as uuid4 } from 'uuid'

const Mutation = {
    createUser(parent, args, ctx, info) {
        const { input } = args
        const { database } = ctx

        const emailExists = database.users.some(
            (user) => user.email === input.email
        )

        if (emailExists) {
            throw new Error('Email already exists :<')
        }

        const newUser = {
            id: uuid4(),
            ...input,
        }

        database.users.push(newUser)

        return newUser
    },
    updateUser(parent, args, ctx, info) {
        const { input } = args
        const { database } = ctx

        const targetUser = database.users.find(
            (user) => user.id === input.userId
        )

        if (!targetUser) {
            throw new Error('User not found :<')
        }

        if (typeof input.email === 'string') {
            const emailExists = database.users.some(
                (user) => user.email === input.email
            )

            if (emailExists) {
                throw new Error('Email already exists :<')
            }

            targetUser.email = input.email
        }

        if (typeof input.name === 'string') {
            targetUser.name = input.name
        }

        return targetUser
    },
    deleteUser(parent, args, ctx, info) {
        const { userId } = args
        const { database } = ctx

        const targetUserIndex = database.users.findIndex(
            (user) => user.id === userId
        )

        if (targetUserIndex === -1) {
            throw new Error('User not found :<')
        }

        const [deletedUser] = database.users.splice(targetUserIndex, 1)

        database.posts = database.posts.filter((post) => {
            // find all the posts belong to the target user
            const targetPostMatches = post.userId === userId

            if (targetPostMatches) {
                database.comments = database.comments.filter(
                    // remove all the comments belong to each target post
                    (comment) => comment.postId !== post.id
                )
            }

            // remove all the posts belong to the target user
            return !targetPostMatches
        })

        // remove all the comments belong to the target user
        database.comments = database.comments.filter(
            (comment) => comment.userId !== userId
        )

        return deletedUser
    },
}

export default Mutation
