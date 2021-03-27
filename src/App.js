import React ,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './HOME/extra/Checkout'
import FirstPage from './HOME/first'
import Second from './HOME/sec'
import Index from './HOME/third/index'
import Cutoff from './HOME/third/View/cutoff/index'
import Fees from './HOME/third/View/Fess'



export default function App() {
      
        return (
                <Router>
                        
                        <Switch>
                                <Route path='/' exact component={FirstPage} />
                                <Route path='/second' component={Second} />
                                <Route path='/overview/:slug' exact component={Index} />
                                <Route path='/fees/:slug' exact component={Fees} />
                                <Route path='/comingsoon' exact component={Checkout} />
                                <Route path='x/cutoff/:slug' exact component={Cutoff} />                          
                                
                                

                        </Switch>






                </Router>







        )
}
