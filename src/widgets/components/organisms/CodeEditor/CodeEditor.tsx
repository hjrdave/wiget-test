
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import styles from './CodeEditor.module.scss';

interface Props {
    onChange?: (value?: string) => void;
};

export default function CodeEditor({ onChange: _onChange }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                <Col>
                    <Editor
                        className={styles.editor}
                        height={"35vh"}
                        width={"100%"}
                        defaultLanguage="html"
                        defaultValue="<!-- HTML -->"
                        theme={'vs-dark'}
                        onChange={_onChange}
                    />
                </Col>
            </div>
        </>
    )
}
