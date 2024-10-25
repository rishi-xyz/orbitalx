import {ApolloClient, InMemoryCache} from "@apollo/client";
import TypePolicies  from "@euclidprotocol/graphql-codegen";

const cache = new InMemoryCache({
    typePolicies: TypePolicies,  
});

export const gqlClient  = new ApolloClient({
    uri:process.env.NEXT_PUBLIC_GRAPHQL_URL,
    ssrMode:true,
    cache,
});
