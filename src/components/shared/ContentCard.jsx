import React from 'react'
import { Box } from './Box'

export const ContentCard = ({ id, content, title, main, aside }) => {
    return (
        <Box id={id} content={content} className='content-card' >
            <div className='container'>
                <div id={`${id}-title`} className='title'><h2>{title}</h2></div>

                <div id={`${id}-content`} className='content-main'>
                    {main}
                {aside}
                </div>
            </div>
        </Box>
    )
}
