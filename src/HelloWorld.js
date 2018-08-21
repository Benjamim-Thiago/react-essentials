import React, {Component} from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "Benjamim Thiago"
        }
    }
    render() {
        const result = 8
        const style = {
            color: '#0080ff',
            fontSize: 50,
            backgroundColor: '#8c7373'
        }


        return (
            <div className="my-class-from-react">
                <StateInput />
                {/*Comentario assim */}
                <h1 style={style}>Hello World</h1>
                <h1>{result === 2 * 4 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div>}</h1>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWorld