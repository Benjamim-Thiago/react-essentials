import React, {Component} from 'react'

class HelloWorld extends Component {
    render() {
        const result = 8
        const style = {
            color: '#0080ff',
            fontSize: 50,
            backgroundColor: '#8c7373'
        }

        return (
            <div className="my-class-from-react">
                {/*Comentario assim */}
                <h1 style={style}>Hello World</h1>
                <h1>{result === 2 * 4 ? <div><ul><li>TRUE</li></ul></div> : <div><ul><li>FALSE</li></ul></div>}</h1>
            </div>
        )
    }
}

export default HelloWorld