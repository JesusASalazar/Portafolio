import React from 'react'

export const TextBlock = ({ text = [] }) => {
    return (
        <>
            {text.map((parr, idx) => {
                return <p key={idx}>{parr}</p>
            })}
        </>
    )
}
