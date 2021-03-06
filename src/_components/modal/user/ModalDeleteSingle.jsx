import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { CommonModal } from '../modal';
import { timingSafeEqual } from 'crypto';
import {userActions} from '../../../_actions'
import { connect } from 'react-redux';


class ModalDeleteSingle extends React.Component {
    constructor(props) {
        super(props)
        this.modalDeleteSingle = this.props.modalDeleteSingle
    }

    handleClose = (modal) => {
        return () => {
            modal.current.handleClose()
        }
    }

    deleteUser = (event) => {
        const id = this.props.idDelete
        if(id) {
            this.props.deleteSingleUser(id)
        }
        event.preventDefault()
    }
  
    render() {
        return (
            <CommonModal ref={this.modalDeleteSingle}>
                <form onSubmit={this.deleteUser}>
                    <div className="modal-header">						
                        <h4 className="modal-title">Delete User</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.handleClose(this.modalDeleteSingle)}>×</button>
                    </div>
                    <div className="modal-body">					
                        <p>Are you sure you want to delete this User?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" onClick={this.handleClose(this.modalDeleteSingle)}/>
                        <input type="submit" className="btn btn-danger" value="Delete" onClick={this.handleClose(this.modalDeleteSingle)}/>
                    </div>
                </form>
            </CommonModal>
        );
    }
}

function mapState(state) {
    return {}
}
const actionCreators = {
    deleteSingleUser: userActions._delete,
}

const connectedModalDeleteSingle = connect(mapState, actionCreators)(ModalDeleteSingle);
export { connectedModalDeleteSingle as ModalDeleteSingle };