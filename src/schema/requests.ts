import { GraphQLClient } from 'graphql-request';

const API_ENDPOINT = 'https://vortex.korabli.su/api/graphql/glossary/';

const client = new GraphQLClient(API_ENDPOINT);

const executeGraphqlQuery = async <T>(query: string, variables?: Record<string, any>): Promise<T> => {
    try {
        const data = await client.request<T>(query, variables);
        return data;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw new Error('Failed to fetch data from GraphQL API');
    }
};

export default executeGraphqlQuery;