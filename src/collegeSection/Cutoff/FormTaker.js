import React from 'react'
import { useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'

export default function FormTaker({ setPostData, formhandller, postData }) {

        return (
                <div>

                        <div className="">


                                <Form onSubmit={formhandller}>
                                        <Row>
                                                <div className="col-lg-3">

                                                </div>
                                                <div className="col-lg-6">
                                                        <div style={{
                                                                margin: "5px",

                                                        }}>
                                                                <Form.Control as="select" size="lg" value={postData.year} onChange={(e) => setPostData({ ...postData, year: e.target.value })} >
                                                                        <option>Year...</option>
                                                                        <option>2020</option>
                                                                        <option>2021</option>
                                                                </Form.Control>
                                                        </div>
                                                        <div style={{
                                                                margin: "5px",
                                                        }}>
                                                                <Form.Control as="select" size="lg" value={postData.cate} onChange={(e) => setPostData({ ...postData, cate: e.target.value })} >
                                                                        <option>Categorey</option>
                                                                        <option>General</option>
                                                                        <option>EWS</option>
                                                                        <option>OBC</option>
                                                                        <option>SC</option>
                                                                        <option>ST</option>
                                                                </Form.Control>
                                                        </div>
                                                        <div style={{ margin: "5px" }} className="d-flex flex-row justify-content-center">
                                                                <Button type="submit">Submit</Button>
                                                        </div>


                                                </div>



                                        </Row>
                                </Form>


                        </div>
                </div>
        )
}
