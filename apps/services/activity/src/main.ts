import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as fs from 'fs';
import gql from 'graphql-tag';
import * as path from 'path';

import { contentInteraction, userActivity, userBookmarks, userInteractionByContentId } from '@kit-platform/user-activity';
import { GraphQLError } from 'graphql';

// Schema
// ------
const typeDefs = gql(
    fs.readFileSync(
        path.resolve('./dist/apps/services/activity/schema.graphql'),
        { encoding: 'utf8' }
    )
);

// // Resolvers
// // ---------
const resolvers = {
    Query: {
        userActivity: async (_, { params }) => {
            try {
                const {userId, contentType} = params;
                return await userActivity(userId, contentType);
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        userActivityByContentId: async (_, { params }) => {
            try {
                const {userId, contentType, contentId} = params;
                return await userInteractionByContentId(userId, contentType, contentId);
            } catch (error) {
                throw new GraphQLError(error.message);
            }
        },
        userBookmarks: async(_, { params }) => {
            try {
                const {userId, contentType} = params;
                return await userBookmarks(userId, contentType);
            } catch(error) {
                throw new GraphQLError(error.message)
            }
        },
        contentActivity: async(_, { params }) => {
            try {
                const { contentId, contentType } = params;
                return await contentInteraction(contentId, contentType)
            } catch(error) {
                throw new GraphQLError(error.message)
            }
        }
    }
}

const server = new ApolloServer({
    schema: buildSubgraphSchema([{ typeDefs, resolvers }]),
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: parseInt(process.env.ACTIVITY_SERVICE_PORT) || 6130 },
    });

    console.log('Activity server ready at:', url);
})();
