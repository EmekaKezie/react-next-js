import React from 'react'

export default function stylePlay() {
    const x = 3;
    return (
        <div>
            <h1 className="title">Style Play</h1>

            <style jsx>
                {`
                    .title{
                        color:${x > 3 ? 'red' : 'blue'}
                    }
                `}
            </style>
        </div>
    )
}
