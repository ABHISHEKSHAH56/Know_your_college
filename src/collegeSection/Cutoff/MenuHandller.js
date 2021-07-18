import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from 'semantic-ui-react'

export default function MenuHandller({ cutoff }) {
        const dispatch = useDispatch()
        const [activeItem, setactiveItem] = useState({
                number: 1
        })
        useEffect(() => {
                if (cutoff) {
                        console.log(activeItem.number)
                        dispatch({
                                type: "CUTOFF",
                                payload: cutoff.filter((item) => item.round == activeItem.number)
                        })
                }

        }, [activeItem, cutoff])




        return (
                <div className="container d-flex flex-row justify-content-center">
                        <Menu pointing vertical>
                                <Menu.Item
                                        name='Round 1'
                                        active={activeItem.number === 1}
                                        onClick={() => setactiveItem({ number: 1 })}
                                />
                                <Menu.Item
                                        name='Round 2'
                                        active={activeItem.number === 2}
                                        onClick={() => setactiveItem({ number: 2 })}
                                />
                                <Menu.Item
                                        name='Round 3'
                                        active={activeItem.number === 3}
                                        onClick={() => setactiveItem({ number: 3 })}
                                />
                                <Menu.Item
                                        name='Round 4'
                                        active={activeItem.number === 4}
                                        onClick={() => setactiveItem({ number: 4 })}
                                />


                        </Menu>
                </div>
        )
}
