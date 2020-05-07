import React from 'react'

import { Col, Row  } from 'antd';
import { Carousel } from 'antd';
import { Card } from 'antd';

import Kurt from "../media/writers/vonnegut.jpeg";
import Dick from "../media/writers/philip_k_dick.jpeg";
import Irving from "../media/writers/irving.jpg";
import axios from 'axios'
import Cookies from 'js-cookie'

import StoryOutput from './Output';


const { Meta } = Card;
var csrfCookie = Cookies.get('XSRF-TOKEN');
class Writers extends React.Component {
 
  constructor (props){
    super(props);
  
  
    this.handleClick = this.handleClick.bind(this);
  
  }
  state = {
    story: []
  }
  render(){
    return(

      <Row gutter={[10, 40]}>
        <Col>
      <Carousel>
        <div>

        <Row justify="space-between">
          
          <Col span={7}>
            <Card hoverable cover={ <img src={Kurt} alt="Kurt Vonnegut" title="kurt_vonnegut" onClick={this.handleClick}  />}>
              <Meta title="Kurt Vonnegut"/>
            </Card>
          </Col>
          <Col  span={7}>
          <Card hoverable cover={<img src={Dick} alt="Philip K. Dick" title="phillip_dick" onClick={this.handleClick}/>} >
            <Meta title="Philip K. Dick"/>
          </Card>
          </Col>
          <Col span={7}>
          <Card hoverable cover={<img src={Irving} alt="John Irving"></img>}>
            <Meta title="John Irving"/>
          </Card>

          </Col>
        </Row>
        </div>

        <div>
        <Row justify="space-between">
          <Col span={7}>
          <img src={Irving} alt="John Irving"></img>
          </Col>
          <Col  span={7}>
          <img src={Dick} alt="Philip K. Dick"></img>

          </Col>
          <Col span={7}>
          <img src={Kurt} alt="Kurt Vonnegut"></img>
         

          </Col>
        </Row>
        </div>

      </Carousel>
      </Col>

      </Row>
    );  
  }

  handleClick(e){
    let writer = e.target.title;
    let storyBegin = document.getElementById("story_input").value;
    
      axios.post('http://127.0.0.1:8000/api/', {
        author: writer,
        storyBegin: storyBegin
      }
      )

      .then(res => {
        
        const story = res.data.story;
        this.setState({ story: story });
        this.props.handleInput(this.state.story)
        
      })
  }

} 

export default Writers; 