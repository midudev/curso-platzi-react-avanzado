import React from 'react'; 
import {Button} from './styles';
export const SubmitButton = ({children,disabled = false, onClick}) => (
    <Button onClick={onClick} disabled={disabled}>{children}</Button>
)