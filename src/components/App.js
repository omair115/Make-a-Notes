import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getNotes, saveNotes,deleteNote } from "../actions/notesAction";
import _ from 'lodash';
import { connect } from 'react-redux';
import NoteCard from "./NoteCard";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
  }

  componentDidMount() {
    this.props.getNotes();
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.saveNotes(note)
    this.setState({
      title: '',
      body: ''
    });
  }

  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (
        <NoteCard key={key}>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
          <Button variant="contained" color="primary" onClick={()=>this.props.deleteNote(key)}>Delete</Button>
        </NoteCard>
      )
    })
  }
  render() {
    return (
      <div>


        <TextField
          onChange={this.handleChange}
          value={this.state.title}
          type="text"
          name="title"
          placeholder="Title..."
          required />


        <TextField
          onChange={this.handleChange}
          value={this.state.body}
          type="text"
          name="body"
          placeholder="body..."
          required />


        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
        {this.renderNotes()}
      </div>

    );

  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes
  }
}
export default connect(mapStateToProps, { getNotes, saveNotes,deleteNote })(App)
