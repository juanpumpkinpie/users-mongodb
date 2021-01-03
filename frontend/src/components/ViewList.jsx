import React, { Component } from 'react'
import Headers from './headers'
import List from './list'

export default class UserList extends Component {
    render(){
        return(
            <div>
              <Headers />
                <List />
            </div>
        )
    }
}