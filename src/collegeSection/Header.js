import React from 'react'
import LoaderHai from '../extra/Loader'
import Somethingwentwrong from './Somethingwentwrong'

export default function Header({ post }) {

        return (
                <div className="d-flex  flex-row justify-content-center m-5">
                        <div class="container  mb-3" >
                                <div class="row ">
                                        <div class="col-lg-4">
                                                <img src="https://www.sundayguardianlive.com/wp-content/uploads/2018/12/p2-42.jpg" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-lg-8">


                                                {
                                                        post ? post[0] === null ? <Somethingwentwrong post={post} /> :
                                                                <div className="card-body">


                                                                        <h1 className="card-title text-center">{post[0].name}</h1>
                                                                        <p className="card-text text-center">Miranda House is a constituent college for women at the University of Delhi in India. Established in 1948, it offers degrees in the sciences and liberal arts..</p>
                                                                </div> : <LoaderHai />
                                                }

                                        </div>
                                </div>
                        </div>



                </div>
        )
}
