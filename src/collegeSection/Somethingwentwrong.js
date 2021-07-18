import React from 'react'
import { useEffect } from 'react';
import { Link, Redirect, Route, useHistory } from 'react-router-dom';
import { Message } from 'semantic-ui-react'

export default function Somethingwentwrong({ post }) {

        return (
                <div className="card " style={{ background: "#ffff", margin: "3px", boxShadow: "0px 0px 3px black ", minHeight: "100px" }}>
                        <Message>
                                <Message.Header>Something went wrong</Message.Header>
                                <Message.List>
                                        <Message.Item>try with other dataset(like change year, college) may be work </Message.Item>
                                        <Message.Item>Due to unability of data in database  ....</Message.Item>
                                </Message.List>
                        </Message>
                </div>
        )




}
