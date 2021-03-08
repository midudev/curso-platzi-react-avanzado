import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Div, Title, Subtitle } from './styles';
export const Layout = ({ children, showTitle = false, showSubtitle = false, title = "", subtitle = "" }) => {
    return (
        <Fragment>
            <Helmet>
                {
                    title && <title>{title} | Petgram</title>
                }
                {
                    subtitle && <meta name="description" content={subtitle} />
                }
            </Helmet>
            <Div>
                {showTitle && <Title>{title}</Title>}
                {showSubtitle && < Subtitle > {subtitle}</Subtitle>}
                {children}
            </Div>
        </Fragment >
    )
}