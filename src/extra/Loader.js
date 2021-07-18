import React from 'react'
import { Dimmer,Loader, Image, Segment } from 'semantic-ui-react'

export default function LoaderHai() {
        return (
                <div style={{display:'flex', justifyContent:'center' }}>
                         <Loader active inline='centered' />
                </div>
        )
}
