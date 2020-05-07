import React from 'react'
import { Col, Row, Divider  } from 'antd';

//import { Input } from 'antd';

//const { TextArea } = Input;



const StoryInput = (props) => {

    return (

        <div>
        <Row>
            <Col span={24}>
                Start your story and ask one of the writers to finish it
            </Col>
       
            <Col span={24}>
                <textarea id="story_input" class="parchment custom-pen"/>
            </Col>
        </Row>
        <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
             Who will finish your story?
        </Divider>

        </div>


       
    );

}

export default StoryInput;