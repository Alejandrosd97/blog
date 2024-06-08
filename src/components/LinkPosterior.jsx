import './css/linkLateral.css'
import React from 'react'


export default function LinkPosterior({postSiguiente, certificacion}) {
    return (

        postSiguiente && <div className='postSiguiente'>
          <a className='linkSiguiente' href={`/blog/${certificacion}/${postSiguiente.slug}`}>{postSiguiente.data.title}</a>
        </div>
      )
}



