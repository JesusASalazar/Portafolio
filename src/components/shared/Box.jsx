import React from 'react'

export const Box = ({
    id,
    className,
    content,
    children
}) => {
    const style = content ?
        content.includes('/') ? {
            backgroundImage: `url(${content})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        } : {
            backgroundColor: content
        } : {};

    return (
        <section id={id} className={className} style={style}>
            {children}
        </section>
    )
}
