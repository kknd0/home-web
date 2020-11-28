import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  posts: Array<Post>;
  post?: Maybe<Post>;
};


export type QueryPostsArgs = {
  page?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  phone: Scalars['String'];
  posts: Array<Post>;
  updoots: Array<Updoot>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  title: Scalars['String'];
  points: Scalars['Float'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  updoots: Array<Updoot>;
  textSnippet: Scalars['String'];
};

export type Updoot = {
  __typename?: 'Updoot';
  id: Scalars['String'];
  user: User;
  post: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  forgetPassword: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  sendPhoneLoginToken: UserResponse;
  phoneLogin: UserResponse;
  sendPhoneRegisterToken: UserResponse;
  phoneRegister: UserResponse;
  createPost: Post;
  updatePost: Post;
  deletePost: Scalars['Boolean'];
};


export type MutationForgetPasswordArgs = {
  phone: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrPhone: Scalars['String'];
};


export type MutationSendPhoneLoginTokenArgs = {
  phone: Scalars['String'];
};


export type MutationPhoneLoginArgs = {
  phoneLoginToken: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationSendPhoneRegisterTokenArgs = {
  phone: Scalars['String'];
};


export type MutationPhoneRegisterArgs = {
  phoneRegisterToken: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationUpdatePostArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type PostInput = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type LoginMutationVariables = Exact<{
  usernameOrPhone: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type PhoneLoginMutationVariables = Exact<{
  phone: Scalars['String'];
  phoneLoginToken: Scalars['String'];
}>;


export type PhoneLoginMutation = (
  { __typename?: 'Mutation' }
  & { phoneLogin: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type PhoneRegisterMutationVariables = Exact<{
  phone: Scalars['String'];
  phoneRegisterToken: Scalars['String'];
}>;


export type PhoneRegisterMutation = (
  { __typename?: 'Mutation' }
  & { phoneRegister: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type SendPhoneLoginTokenMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendPhoneLoginTokenMutation = (
  { __typename?: 'Mutation' }
  & { sendPhoneLoginToken: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type SendPhoneRegisterTokenMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendPhoneRegisterTokenMutation = (
  { __typename?: 'Mutation' }
  & { sendPhoneRegisterToken: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation Login($usernameOrPhone: String!, $password: String!) {
  login(usernameOrPhone: $usernameOrPhone, password: $password) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const PhoneLoginDocument = gql`
    mutation PhoneLogin($phone: String!, $phoneLoginToken: String!) {
  phoneLogin(phone: $phone, phoneLoginToken: $phoneLoginToken) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function usePhoneLoginMutation() {
  return Urql.useMutation<PhoneLoginMutation, PhoneLoginMutationVariables>(PhoneLoginDocument);
};
export const PhoneRegisterDocument = gql`
    mutation PhoneRegister($phone: String!, $phoneRegisterToken: String!) {
  phoneRegister(phone: $phone, phoneRegisterToken: $phoneRegisterToken) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function usePhoneRegisterMutation() {
  return Urql.useMutation<PhoneRegisterMutation, PhoneRegisterMutationVariables>(PhoneRegisterDocument);
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const SendPhoneLoginTokenDocument = gql`
    mutation SendPhoneLoginToken($phone: String!) {
  sendPhoneLoginToken(phone: $phone) {
    errors {
      field
      message
    }
  }
}
    `;

export function useSendPhoneLoginTokenMutation() {
  return Urql.useMutation<SendPhoneLoginTokenMutation, SendPhoneLoginTokenMutationVariables>(SendPhoneLoginTokenDocument);
};
export const SendPhoneRegisterTokenDocument = gql`
    mutation SendPhoneRegisterToken($phone: String!) {
  sendPhoneRegisterToken(phone: $phone) {
    errors {
      field
      message
    }
  }
}
    `;

export function useSendPhoneRegisterTokenMutation() {
  return Urql.useMutation<SendPhoneRegisterTokenMutation, SendPhoneRegisterTokenMutationVariables>(SendPhoneRegisterTokenDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    createdAt
    updatedAt
    title
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};