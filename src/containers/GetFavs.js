import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
    if (loading) return <Loader />
    if (error) return <ErrorMessage message={error} title={true} />

    const { favs } = data;
    return favs.map(fav => <img key={fav.id} src={fav.src} />)
}

export const GetFavs = () => (
    <Fragment>
        <Query query={GET_FAVS}>
            {renderProp}
        </Query>
    </Fragment>
)