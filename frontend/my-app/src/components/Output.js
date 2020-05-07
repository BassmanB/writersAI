import React from 'react'
import { Col, Row, Divider  } from 'antd';

//import { Input } from 'antd';

//const { TextArea } = Input;



const StoryOutput = (props) => {

    return(
        <Row gutter={[10, 40]}>
            <Col span={24}>
                <div class="parchment-down">
                    { props.story }
                </div>
            </Col>
        </Row>

    );

}

export default StoryOutput;

