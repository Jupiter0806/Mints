import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import ErrorMessages from './ErrorMessages'

import isFunction from '../helpers/isFunction';
import getBase64FromBlob from '../helpers/getBase64FromBlob';

export default class AvatarPicker extends React.Component {
    static propTypes = {
        // should be a function which accept one argument in base64
        onPicked: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            imageFile: '',
            imageBlob: null,
            hasDoneEdit: false,
            imagePickerErrorMessage: '',
        }
    }

    handleImageSelected = (imageFile) => {
        if (/(jpg|jpeg|png|gif)$/i.exec(imageFile.type)) {
            this.setState({ imageFile, imagePickerErrorMessage: '' });
        } else {
            this.setState({ imagePickerErrorMessage: 'Invalid Image. Please choose another one.' })
        }
    }

    handleDone = () => {
        this.editor && this.editor.getImage().toBlob(imageBlob => {
            this.setState({ imageBlob, hasDoneEdit: true })
            this.props.onPicked && isFunction(this.props.onPicked) && 
                getBase64FromBlob(imageBlob)
                .then(base64 => this.props.onPicked(base64))
                .catch(error => {
                    console.error("Internal error", error);
                    this.props.onPicked(null);
                });
        });
    }

    setEditorRef = editor => this.editor = editor

    renderFilePicker = () => (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
            <label style={{ marginRight: 8 }} >Avator:</label> 
            <input type='file' name='file' onChange={({ target: {files} }) => this.handleImageSelected(files ? files[0] : null)} /> <br/>
        </div>
    )

    renderImagePickerErrorMessage = () => (
        <ErrorMessages errorMessages={[this.state.imagePickerErrorMessage]} />
    )

    renderAvatarEditor = () => (
        <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <AvatarEditor
                ref={this.setEditorRef}
                image={this.state.imageFile}
                width={150}
                height={150}
                border={50}
                scale={1.2}
                color={[255, 255, 255, 0.6]} // RGBA
                rotate={0}
                />
                <Button style={{ marginTop: 13, width: '35%' }} bsStyle='primary' onClick={this.handleDone} >Done</Button>
        </div>
    )

    renderFinalAvatar = () => (
        <img 
            src={URL.createObjectURL(this.state.imageBlob)} 
            style={{
                width: 150,
                height: 150,
                margin: 'auto'
            }}
            alt='Failed to load'
            />
    )

    render() {
        return (
            <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }} >
                {!this.state.hasDoneEdit && this.renderFilePicker()}
                {this.state.imagePickerErrorMessage && this.renderImagePickerErrorMessage()}
                {this.state.imageFile && !this.state.hasDoneEdit && this.renderAvatarEditor()}
                {this.state.imageBlob && this.renderFinalAvatar()}
            </div>
        )
    }
}
