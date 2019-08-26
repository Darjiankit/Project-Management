import React, { Component } from 'react'
import { createProject } from "../Store/actions/projectActions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
        this.props.history.push("/")
    }

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container">
                <form onSubmit={this.handlesubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handlechange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handlechange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStatToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStatToProps, mapDispatchtoProps)(CreateProject)



