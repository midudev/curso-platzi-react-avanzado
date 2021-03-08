import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavs } from '../components/ListOfFavs';
import {Loader} from '../components/Loader';
import {ErrorMessage} from '../components/ErrorMessage';

const query = gql`
query getFavs {
  favs {
    id
    categoryId
    src
    likes
    userId
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error.message} title={true} />
  const { favs } = data;
  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={query} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
