import React, { Component } from 'react';
import { IoIosReverseCamera } from 'react-icons/io';
import { CameraDiv, ImageDivCamera, MainEditImage, Button } from './styledComponent';
import Navbar from '../Navbar';
import AvatarEditor from 'react-avatar-editor'; // Import AvatarEditor component
import { Dialog } from 'primereact/dialog'; // Import Dialog component

class EditProfile extends Component {
    state = {
        image: '',
        preview: null,
        allowZoomOut: false,
        scale: 1,
        rotate: 0,
        selectedImage: null,
        visible: false // State to control the visibility of the dialog
    };

    handleNewImage = async e => {
        const selectedFile = e.target.files[0];
        const imageURL = URL.createObjectURL(selectedFile);
        await this.setState({ selectedImage: imageURL, image: selectedFile, visible: true });
    }

    handleScaleChange = e => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    }

    handleRotateChange = e => {
        const rotate = parseFloat(e.target.value);
        this.setState({ rotate });
    }

    onClickSave = () => {
        if (this.editor) {
            const canvas = this.editor.getImage();
            const imageURL = canvas.toDataURL();
            this.setState({ preview: imageURL });
        }
    }

    setEditorRef = editor => {
        if (editor) {
            this.editor = editor;
        }
    }

    handleShowClick = () => {
        document.getElementById('fileInput').click(); // Trigger file selection
    }

    render() {
        const { selectedImage, image, scale, rotate, preview, visible } = this.state;

        return (
            <>
                <Navbar />
                <MainEditImage>
                    <label htmlFor="fileInput">
                        <CameraDiv>
                            {selectedImage ? <ImageDivCamera src={preview} alt="Selected" /> : <IoIosReverseCamera color={'white'} size={30} />}
                        </CameraDiv>
                    </label>

                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={this.handleNewImage}
                    />

                    <Button icon="pi pi-external-link" onClick={this.handleShowClick}>Show</Button>

                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => this.setState({ visible: false })}>
                        <div>
                            <AvatarEditor
                                image={image}
                                width={250}
                                height={250}
                                border={50}
                                color={[255, 255, 255, 0.6]} // RGBA
                                scale={parseFloat(scale)}
                                rotate={rotate}
                                ref={this.setEditorRef}
                            />

                            <div>
                                <input
                                    type="range"
                                    value={scale}
                                    min="1"
                                    max="2"
                                    step="0.01"
                                    onChange={this.handleScaleChange}
                                />
                                <input
                                    type="range"
                                    value={rotate}
                                    min="0"
                                    max="360"
                                    step="1"
                                    onChange={this.handleRotateChange}
                                />
                            </div>

                            <button onClick={this.onClickSave}>Save</button>
                        </div>
                    </Dialog>
                </MainEditImage>
            </>
        );
    }
}

export default EditProfile;
