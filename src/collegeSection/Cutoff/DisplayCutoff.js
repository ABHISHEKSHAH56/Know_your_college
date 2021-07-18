import React from 'react'

import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Load from '../Load'
import Somethingwentwrong from '../Somethingwentwrong'

export default function DisplayCutoff() {
        const arr = useSelector(state => state.shop.cutoff)
        console.log(arr)
        return (
                <div>
                        <>

                                <div >
                                        <Table striped bordered hover >
                                                <thead style={{ color: "white", background: "black" }}>
                                                        <tr>
                                                                <th  >Course</th>
                                                                <th className="text-center">Marks</th>

                                                        </tr>    </thead>
                                                <tbody >
                                                        {
                                                                arr ? arr.length > 0 ? arr.map((e) => (

                                                                        <tr key={e._id}>
                                                                                <td className="fw-blod   table-success ">{e.course}</td>
                                                                                <td className="fw-bld   secondary">{e.marks} %</td>
                                                                        </tr>



                                                                )) : <Somethingwentwrong />
                                                                        : <Load />

                                                        }

                                                </tbody>
                                        </Table>

                                </div>
                        </>

                </div>
        )
}
