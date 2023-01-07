import { Badge, Button, Modal } from 'react-bootstrap';
import playIcon from '../assets/images/play-icon.webp';
import githubIcon from '../assets/images/github-icon.png';

function ReactModal({ ModalData, ReactModalShow, setReactModalShow }) {
    return (
        <Modal
            size='xl'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={ReactModalShow}
            onHide={() => setReactModalShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Preview
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h2>{ModalData?.title}</h2>
                <iframe src={ModalData?.appLink} width='100%' height='800' title={ModalData?.title}></iframe>
                <h3 className='mt-3'>
                    {
                        ModalData?.badges.map(badge => {
                            return (
                                <Badge bg='secondary' className='m-1' key={badge.id}>{badge.used}</Badge>
                            );
                        })
                    }
                </h3>
                <div id='features' className='row-fluid flex-column mx-auto w-75 p-2'>
                    <h4 className='col-md-12 feature'><span>Features</span>:</h4>
                    <ul className='col-md-12 text-center'>
                        {
                            ModalData?.features.map(feature => {
                                return (
                                    <li className='mx-1 text-center feature-list' key={feature.id}>{feature.ftr}</li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div id='play'>
                    <a href={ModalData?.appLink} target='_blank' rel='noreferrer' title='Play it here!'><img src={playIcon} alt='Play icon' className='play-icon' /></a>&nbsp;
                    <a href={ModalData?.repoLink} target='_blank' rel='noreferrer' title='GitHub link'><img src={githubIcon} alt='GitHub icon' className='github-icon' /></a>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setReactModalShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ReactModal;