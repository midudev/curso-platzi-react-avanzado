import React from 'react'; 
import {Button, Link} from './styles';
export const SubmitButton = ({children,disabled = false, onClick}) => (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
)
export const RedirectButton = ({children,disabled = false, onClick}) => (
    <Link onClick={onClick} disabled={disabled} to='/'>{children}</Link>
)