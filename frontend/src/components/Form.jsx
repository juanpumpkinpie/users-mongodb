import React,{ Component } from 'react'


export default class FormList extends Component {
    render(){
        return(
            <form method="POST" action="/post/store" >
                <h2>Create a User</h2>
                <input type="text" name="name" placeholder="Write your name"/>
                <input type="text" name="body" placeholder="Body"/>
                <input type="submit"/>
            </form>
        )
    }
}