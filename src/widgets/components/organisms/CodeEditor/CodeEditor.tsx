
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import styles from './CodeEditor.module.scss';

interface Props {

};

export default function CodeEditor({ }: Props) {

    const data = {
        firstName: 'David',
        lastName: 'Sanders',
        title: 'Code Ninja'
    }

    const [html, setHtml] = React.useState<string | undefined>('');

    //data bind html string
    const dataBind = (htmlString: string, data: { [key: string]: string }) => {
        let bindedHtmlString = htmlString;
        const params = htmlString.match(/{{([^{{}}]+)}}/g)?.map((param) => param.replace(/[{{}}]/g, ''))?.filter((param) => Object.hasOwn(data, param));
        params?.map((param) => {
            const value = data[param];
            const regex = new RegExp(`({{${param}}})`, 'g');
            bindedHtmlString = bindedHtmlString.replace(regex, value);
        });
        return bindedHtmlString;
    }

    const htmlFrom = (htmlString: string) => {
        const bindedHtmlString = dataBind(htmlString, data);
        const cleanHtmlString = DOMPurify.sanitize(bindedHtmlString,
            { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }


    return (
        <>
            <div className={styles.compContainer}>
                <Col>
                    <Editor
                        height={"35vh"}
                        width={"100%"}
                        defaultLanguage="html"
                        defaultValue="<!-- HTML -->"
                        theme={'vs-dark'}
                        onChange={(e) => setHtml(e)}
                    />
                    <div style={{ border: '1px solid grey', marginTop: '1rem', padding: '1rem' }}>
                        {htmlFrom(html as any)}
                    </div>

                </Col>
            </div>
        </>
    )
}



        // const params = htmlString.match(/{([^{{}}]+)}/g)?.map((param: string) => {
        //     return param.replace(/[^{{}}$]/g, '');
        // });
        // params?.map((param) => {
        //     const bindedValue = (param) ? data[param] : '';
        //     const regex = new RegExp(/[{{^param}}}]/g);
        //     bindedHtmlString = bindedHtmlString.replace(regex, bindedValue);
        // });
        // return bindedHtmlString;
        // params?.map((param) => {
        //     const bindedValue = data[param];
        //     const regex = new RegExp(/[{{^param}}}]/g);
        //     bindedHtmlString = bindedHtmlString.replace(regex, bindedValue);
        // });
        // return bindedHtmlString;
