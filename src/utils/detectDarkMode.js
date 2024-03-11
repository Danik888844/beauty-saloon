const detectDarkMode = () => {
    if(window.matchMedia && window.matchMedia('(prefers-color-schema: dark)').matches){
        return 'dark';
    }
    return 'light';
};

export default detectDarkMode;