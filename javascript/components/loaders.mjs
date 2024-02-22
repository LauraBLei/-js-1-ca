

const showLoader = () => {
    const loader = document.querySelector('loader')
    loader.hidden = false
}

const hideLoader = () => {
    const loader = document.querySelector('loader')
    loader.hidden = true
}

export const loader = async (APIFunction, Url ) => {
    console.log("Inside loader. url: ", Url);
    showLoader()
    try{
        await APIFunction(Url)
    }catch(error){
        alert(error)
        console.log(error);
    }finally{
        hideLoader()
    }
}


