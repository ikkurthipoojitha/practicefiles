import React,{Component} from "react";

class NewForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            remarks:'',
            topic:'react'

        }
    }
    handleNameChange = (event)=>{
        this.setState({name:event.target.value})
    }
    handleRemarksChange = (event) =>{
        this.setState({remarks:event.target.value})

    }

    handleTopicChange = (event)=>{
        this.setState({topic:event.target.value})
    }
    handleSubmit = event =>{
        alert(`${this.state.name} ${this.state.remarks} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
        const {name,remarks,topic} = this.state
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value = {name} onChange={this.handleNameChange} />
            </div>
            <div>
                <label>Remarks</label>
                <textarea value = {remarks} onChange = {this.handleRemarksChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value = {topic} onChange={this.handleTopicChange}>
                    <option value = "react">React</option>
                    <option value = "angular">Angular</option>
                    <option value = "vue">Vue</option>

                </select>
            </div>
            <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default NewForm