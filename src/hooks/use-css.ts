export type TRawCSSImport = {
    readonly [key: string]: string;
}
const useCSS = () => {


    const nameSpaceClasses = (rawCssString: TRawCSSImport, namespaces: TRawCSSImport) => {
        let nameSpacedCSS = rawCssString.toString();
        const nameSpaces = Object.entries(namespaces);

        //namespace css classes
        nameSpaces.map(([originalClass, nameSpacedClass]) => {
            nameSpacedCSS = nameSpacedCSS.replaceAll(originalClass, nameSpacedClass);
        });

        //makes sure :global scss syntax is parsed correctly
        nameSpacedCSS = nameSpacedCSS.replaceAll(':global(', '').replaceAll(') {', ' {');

        return nameSpacedCSS;
    };

    return {
        nameSpaceClasses
    }
};

export default useCSS;