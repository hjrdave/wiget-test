type TRawCSSImport = {
    readonly [key: string]: string;
}
const useCSS = () => {
    const nameSpaceClasses = (rawCssString: TRawCSSImport, namespaces: TRawCSSImport) => {
        let nameSpacedCSS = rawCssString.toString();
        const nameSpaces = Object.entries(namespaces);
        nameSpaces.map(([originalClass, nameSpacedClass]) => {
            nameSpacedCSS = nameSpacedCSS.replaceAll(originalClass, nameSpacedClass);
        });
        return nameSpacedCSS;
    };

    return {
        nameSpaceClasses
    }
};

export default useCSS;