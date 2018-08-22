import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

import { Navbar, RadioInput } from '../../../components';

import '../main.css';

export class Secondary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionary1Answer: null
        }
    }


    render() {
        return (
            <div>
               <Navbar />
               <Panel>
                   <Panel.Body>
                       <div className='main-body'>
                            <h3>About Mints</h3>
                            <p>
                                <strong>Aliquam</strong> laoreet condimentum massa ac dapibus. Cras ut vestibulum magna. Nullam ultrices vitae est nec facilisis. Sed tempor urna nec sapien varius consequat. Nam viverra at elit nec maximus. Cras lobortis justo a velit sollicitudin condimentum. Praesent luctus odio quis rutrum cursus. In hac habitasse platea dictumst. Integer volutpat nunc in gravida imperdiet. Curabitur commodo varius venenatis. Suspendisse dolor mi, malesuada vel interdum ut, porttitor ac mauris. In et nibh mauris. Cras posuere at lacus ut ultricies. In eu velit ac turpis consectetur vehicula.
                            </p>
                            <p>
                                Quisque iaculis dui id sagittis condimentum. Nunc varius orci sed fermentum convallis. Ut consectetur scelerisque neque, ac pulvinar nibh tincidunt sed. In eu placerat odio. Nulla fringilla, sem quis ornare sollicitudin, tellus felis rutrum nunc, et molestie est sapien nec nibh. Morbi eu magna at risus bibendum tristique. In auctor mi ut turpis congue, a aliquet massa auctor. Suspendisse interdum nisi vel purus venenatis gravida. Mauris fringilla sit amet orci auctor convallis. Fusce lorem eros, porta ut euismod vel, consectetur in ex. Sed sed purus metus. Integer urna arcu, efficitur non urna a, condimentum accumsan elit. Aenean vehicula lacus ut nisi convallis, ut posuere erat molestie. Aliquam et nibh leo. In eu sem laoreet, vulputate libero consequat, convallis lorem. Integer semper pulvinar diam non rutrum.
                            </p>

                            <h3>Questionary</h3>
                            <h6>Choose best suit for you</h6>
                            <div>
                                {
                                    this.state.questionary1Answer
                                        ? <p>You chose {this.state.questionary1Answer}. Thank you for your participation.</p>
                                        : <RadioInput 
                                            options={[
                                                'I am a front-end developer',
                                                'I am a back-end developer',
                                                'I am a fullstack developer',
                                                'I am a superman/superwoman',
                                            ]} 
                                            checkedOption='I am a superman/superwoman' 
                                            onSubmit={questionary1Answer => this.setState({ questionary1Answer })} 
                                            />
                                }
                            </div>
                       </div>
                   </Panel.Body>
               </Panel>
            </div>
        )
    }
}

export default compose(
    connect(({  
        user
    }) => ({
        user: user.data,
        isSignUp: user.isSignUp,
        signUpErrorMessage: user.signUpErrorMessage
    }))
)(Secondary);