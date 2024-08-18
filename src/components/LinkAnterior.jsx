import React from "react"
import './css/linkLateral.css'


export default function LinkAnterior({postAnterior, certificacion}) {
    return (
        postAnterior && <div className='postPrevio'>
            <a className="linkPrevio" href={`/blog/${certificacion}/${postAnterior.slug}`}>{postAnterior.data.title}</a>
        </div>
    )
}