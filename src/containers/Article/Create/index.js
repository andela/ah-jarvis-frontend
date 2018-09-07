import Dante from 'Dante2'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import Header from '../../../components/Header'
import createArticle from './actions'
import UserInfo from '../../../components/UserInfo'
import editorstate from './editorstate';

class Create extends Component {
  handleSave(state){
    const editorState = state.editorState()
    const title = editorState.getCurrentContent().getFirstBlock().text
    const data = {
      article: {
        body: JSON.stringify(state.editorContent),
        title,
        description: title
      }
    }
    localStorage.setItem('article', JSON.stringify(data))
  }

  handleSuccess = () => {
    console.log('Saved')
  }

  handlePublish = () => {
    this.props.postArticle(
      JSON.parse(localStorage.getItem('article')),
      this.props.history
    )
    localStorage.removeItem('')
  }

  handleFailure = () => {
    console.log('Failed')
  }
  render () {
    return (
      <React.Fragment>
        <Header />
        <div className='container m-t--30'>
          <UserInfo onPublish={this.handlePublish} />
          <div className='row'>
            <div className='col s12'>
              <Dante
                content={editorstate}     
                spellcheck={true}
                title_placeholder={'Title'}
                data_storage={{
                  url: 'http://localhost:9000/api/articles/',
                  method: 'POST',
                  save_handler: this.handleSave,
                  success_handler: this.handleSuccess,
                  failure_handler: this.handleFailure
                }}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ postArticle: createArticle }, dispatch)

export default connect(null, mapDispatchToProps)(Create)
