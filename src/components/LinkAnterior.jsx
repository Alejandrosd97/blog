import { useState } from "react"
import React from "react"
import './css/linkLateral.css'


export default function LinkAnterior({postAnterior}) {
    const [previousPostLink, setPreviousPostLink] = useState(false)


    console.log(previousPostLink)
    return (

postAnterior && <div className='postPrevio'>
      <a className="linkPrevio" href={`/blog/javascript/${postAnterior.slug}`}>{postAnterior.slug}</a>
    </div>
    )
}