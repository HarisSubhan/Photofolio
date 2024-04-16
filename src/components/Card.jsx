import React from 'react'
import { photos } from '../pages/data/photos'
import Single from './Single'

const Card = () => {
  return (
    <>
    <div className="container-fluid my-3" >
        <div className="row" >
            {photos.map((item) => {
                        return (
                            <>
                                <div className="col-lg-3 col-md-6 my-1">
                                    <div className="card border-0 rounded-3 bg-transparent">
                                        <Single {...item} />
                                    </div>
                                </div>
                            </>
                        )
                    })}

        </div>
    </div>
    </>
  )
}

export default Card