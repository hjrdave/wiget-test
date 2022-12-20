import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const useHTML = () => {

    //Looks for {{propName}} in html string and replaces it with appropriate data valu
    const bindData = (htmlString: string, data: { [key: string]: string }) => {
        let bindedHtmlString = htmlString;
        const params = htmlString.match(/{{([^{{}}]+)}}/g)?.map((param) => param.replace(/[{{}}]/g, ''))?.filter((param) => Object.hasOwn(data, param));
        params?.map((param) => {
            const value = data[param];
            const regex = new RegExp(`({{${param}}})`, 'g');
            bindedHtmlString = bindedHtmlString.replace(regex, value);
        });
        return bindedHtmlString;
    }

    //sanitizes and then parses html string
    const parseHTMLString = (htmlString: string) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
            { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
    }

    const htmlFrom = (htmlString: string, options?: { bindData?: { [key: string]: string } }) => {
        if (options?.bindData) {
            const bindedString = bindData(htmlString, options?.bindData);
            return parseHTMLString(bindedString);
        } else {
            return parseHTMLString(htmlString);
        }

    }

    return {
        htmlFrom,
        bindData,
        parseHTMLString
    }
};

export default useHTML;