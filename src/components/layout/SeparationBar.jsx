import React from 'react'
import { Box } from '../shared/Box'

export const SeparationBar = ({ 
    id,
    height = '40px',        
    content,              
    children,         
}) => {
    const style = {
        height,
        margin: 0,
        padding: '10px 10%',
    };

    return (
        <Box
            id={id}
            content={content}
        >
            <div style={style}>
                {children}
            </div>
        </Box>
    )
}
