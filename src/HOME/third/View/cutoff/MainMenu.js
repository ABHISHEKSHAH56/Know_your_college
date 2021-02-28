import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Form,Row,Col,} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { getcutoff } from '../../../Redux/action/post';
import CutOff from './index';

export default function MainMenu() {
        let { path, url } = useRouteMatch();      
        let { slug } = useParams();
       
        const dispatch = useDispatch();
        const [postData,setPostData]=useState({
                year:2020,
                cate:'General',
                college_id:slug,
                
        })
        const [year, setyear] = useState(false)
        const [cate, setcate] = useState(false)
        const handleClicker=()=>setyear(true);
       
        
       
        const handleSubmit=(e)=>{
                e.preventDefault();            
                dispatch(getcutoff(postData))    
                setcate(true);
        }
   
      
       
        return (
                <div>
                                <div className="d-flex flex-column justify-content-center">
                                <h1 style={{ 'fontFamily': "Nunito", 'fontWeight': 'bold', color: ' #35404e' }}> Select  Year</h1>
                                <div className="year">
                                <Form>
                                        <Row>
                                                <Col>
                                                        <Form.Control  as="select"  value={postData.year} onChange={(e) => setPostData({ ...postData, year: e.target.value })} >
                                                        <option>Year...</option>
                                                        <option>2020</option>
                                                        <option>2021</option>
                                                        </Form.Control>
                                                       
                                                </Col>
                                                <Col>
                                               
                                                
                                                        <Button onClick={handleClicker}>Submit</Button>
                                                       
                                                </Col>
                                        </Row>
                                </Form>
                               </div>
                               </div>
                               {
                                    year ? (
                                        <div>
                                        <h1 style={{ 'fontFamily': "Nunito", marginTop:'2px', 'fontWeight': 'bold', color: ' #35404e' }}> Select  Categorey</h1>
                                        <div className="year">
                                        <Form onSubmit={handleSubmit}>
                                                <Row>
                                                        <Col>
                                                                <Form.Control  as="select"  value={postData.cate} onChange={(e) => setPostData({ ...postData, cate: e.target.value })} >
                                                                <option>Categorey</option>
                                                                <option>General</option>
                                                                <option>SC</option>
                                                                <option>ST</option>
                                                                </Form.Control>
                                                               
                                                        </Col>
                                                        <Col>
                                                        
                                                        
                                                                <Button  type="submit">Submit</Button>
                                                                
                                                        </Col>
                                                </Row>
                                        </Form>
                                       </div>
                                       </div>

                                    ) : <div></div>   
                               }
                               
                              {
                                cate ? <CutOff  data={postData}/> : <div></div>
                              }
                       
                </div>
        )
}
