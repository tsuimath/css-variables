(function(){
    const $rootCss = document.querySelector(':root')

    function addCssVariable(variableName, color) {
        $rootCss.style.setProperty(variableName, color)
    }

    addCssVariable('--h2JsColor', '#E2E2E2')
    addCssVariable('--backgroundJs', '#247BA0')
})()