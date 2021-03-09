import React from 'react'; 
import PropTypes from 'prop-types';
import {Button, Link} from './styles';
export const SubmitButton = ({children,disabled = false, onClick}) => (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
)
export const RedirectButton = ({children,disabled = false, onClick}) => (
    <Link onClick={onClick} disabled={disabled} to='/'>{children}</Link>
)

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}
RedirectButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}