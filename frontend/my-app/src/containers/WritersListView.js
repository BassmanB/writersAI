import React  from 'react'
import axios from 'axios'

import Writers from '../components/Writers';
import StoryInput from '../components/StoryInput';
import Output from '../components/Output';

class WritersList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          story: ''
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue(val) {
        this.setState({ story: val });
    }

    render() {
        return (
            <div>
                <StoryInput  />
                <Writers handleInput={this.handleInputValue} />
                <Output story={this.state.story} />
            </div>
        )
    }
}

export default WritersList;