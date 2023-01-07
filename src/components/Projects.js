import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactModal from './ReactModal';
import JSModal from './JSModal';

function Projects({ theme, jsProj, reactProj }) {
    const [ReactModalShow, setReactModalShow] = useState(false);
    const [JSModalShow, setJSModalShow] = useState(false);
    const [ModalData, setModalData] = useState(null);

    return (
        <div className='projects row align-items-center'>
            <div className='react-js mb-5'>
                <hr />
                <h2>ReactJS</h2>
                <hr />
                <div className='react-js-projects row align-items-center'>
                    {
                        reactProj.contents?.map(content => {
                            return (
                                <div className={theme === 'light' ? 'project col-md-4 p-2 flip-card mx-auto' : 'project col-md-4 p-2 flip-card-dark mx-auto'} key={content.id}>
                                    <div className={theme === 'light' ? 'flip-card-inner' : 'flip-card-inner-dark'}>
                                        <div className={theme === 'light' ? 'flip-card-front' : 'flip-card-front-dark'}>
                                            <img src={require(`../assets/images/${content.imgFileName}`)} alt={`${content.title} icon`} style={{ maxWidth: '260px', height: '300px' }} className='col-md-12' />
                                            <p className='font-dark mt-3'>{content.title}</p>
                                        </div>
                                        <div className='flip-card-back d-flex justify-content-center align-items-center'>
                                            <Button variant='primary' onClick={() => {
                                                setModalData(content);
                                                setReactModalShow(true);
                                            }}
                                            >
                                                Check it out here
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <ReactModal
                        ModalData={ModalData}
                        ReactModalShow={ReactModalShow}
                        setReactModalShow={setReactModalShow}
                    />
                </div>
            </div>

            <div className='vanilla-js mb-5'>
                <hr />
                <h2>JavaScript ES5/ES6</h2>
                <hr />
                <div className='vanilla-js-projects row align-items-center'>
                    {
                        jsProj.contents?.map(content => {
                            return (
                                <div className={theme === 'light' ? 'project col-md-4 p-2 flip-card mx-auto' : 'project col-md-4 p-2 flip-card-dark mx-auto'} key={content.id}>
                                    <div className={theme === 'light' ? 'flip-card-inner' : 'flip-card-inner-dark'}>
                                        <div className={theme === 'light' ? 'flip-card-front' : 'flip-card-front-dark'}>
                                            <img src={require(`../assets/images/${content.imgFileName}`)} alt={`${content.title} icon`} style={{ maxWidth: '260px', height: '300px' }} className='col-md-12' />
                                            <p className='font-dark mt-3'>{content.title}</p>
                                        </div>
                                        <div className='flip-card-back d-flex justify-content-center align-items-center'>
                                            <Button variant='primary' onClick={() => {
                                                setModalData(content);
                                                setJSModalShow(true);
                                            }}
                                            >
                                                Check it out here
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <JSModal
                        ModalData={ModalData}
                        JSModalShow={JSModalShow}
                        setJSModalShow={setJSModalShow}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;