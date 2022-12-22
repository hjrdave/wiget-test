
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

import styles from './CodeEditor.module.scss';

interface Props {
    onChange?: (value?: string) => void;
    value?: string;
    type?: 'html' | 'css';
    defaultValue?: string;
    height?: string;
};

export default function CodeEditor({ onChange: _onChange, value, type, defaultValue, height }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                <Col>
                    <Editor
                        className={styles.editor}
                        height={(height) ? height : "400px"}
                        width={"100%"}
                        defaultLanguage={(type) ? type : 'html'}
                        defaultValue={defaultValue}
                        theme={'vs-dark'}
                        onChange={_onChange}
                        value={value}
                        onMount={(editor) => {
                            setTimeout(function () {
                                editor.getAction('editor.action.formatDocument').run();
                            }, 10)
                        }}
                    />
                </Col>
            </div>
        </>
    )
}
