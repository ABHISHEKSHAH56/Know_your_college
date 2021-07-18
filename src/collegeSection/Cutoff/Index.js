import { Description } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchcutoff } from '../../api'
import DisplayCutoff from './DisplayCutoff'
import FormTaker from './FormTaker'
import MenuHandller from './MenuHandller'

export default function Index() {
        const dispatch = useDispatch();

        const [click, setclick] = useState(false)
        const [cutoff, setcutoff] = useState(false)
        const [arr, setarr] = useState(null)
        const [postData, setPostData] = useState({
                year: 2019,
                cate: "General"
        })
        const formhandller = (e) => {
                setclick(true)
                e.preventDefault()
                console.log(postData)
                fetchcutoff(postData).then((response) => {
                        console.log(response)
                        setcutoff(response.data)


                }).catch((err) => {
                        console.log(err.response)

                })

        }



        return (
                <div>
                        <FormTaker formhandller={formhandller} postData={postData} setPostData={setPostData} />
                        {
                                click ? <div className="row " style={{ marginTop: "20px" }}>

                                        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                                <MenuHandller cutoff={cutoff} />

                                        </div>
                                        <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
                                                <DisplayCutoff />
                                        </div>
                                </div> : <h1></h1>
                        }
                </div>
        )
}
