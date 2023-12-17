export interface GraphqlResponse<T, R> {
  responseData: T
  responseErrors: R
}

export type GraphqlInvokeAction = (page) => Promise<void>

export type InvokeAndWaitForGraphql = <T, R> (
  graphqlMethod: string,
  action: GraphqlInvokeAction,
  maxWaitTime?: number,
) => Promise<GraphqlResponse<T, R>>
