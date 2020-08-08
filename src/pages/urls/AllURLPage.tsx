import React, { Component, Suspense } from "react";
import Modal from "react-modal";

import "../pageStyles.scss";

import URLList from "../../components/url_list";

import {getAllURLs} from "../../api";
import { wrapPromise } from "../../utils";

import ShortCodeForm from "../../components/short_code_creation";

Modal.setAppElement("#root")

interface AllURLsState {
    showCreationModal: boolean
}

class AllURLsPage extends Component<Readonly<{}>, AllURLsState> {
    constructor(props: Readonly<{}>) {
        super(props);

        this.state = {
            showCreationModal: false
        }

        this.displayModal = this.displayModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    displayModal() {
        this.setState({
            showCreationModal: true
        })
    }

    hideModal() {
        this.setState({
            showCreationModal: false
        })
    }

    render() {
        return <div>
            <Modal 
                isOpen={this.state.showCreationModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <ShortCodeForm closeFunction={this.hideModal}/>
            </Modal>
            <h1 className="page-title">All URLs</h1>
            <button onClick={this.displayModal} className="button primary">Create new short code</button>
            <Suspense fallback={<p className="page-subtitle">Loading URLs...</p>}>
                <URLList resource={wrapPromise(getAllURLs())}/>
            </Suspense>
        </div>
    }
}

export default AllURLsPage;