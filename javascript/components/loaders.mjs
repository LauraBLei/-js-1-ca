

const showLoader = () => {
    const loader = document.getElementById('loader')
    console.log(loader);
    loader.hidden = false
}

const hideLoader = () => {
    const loader = document.getElementById('loader')
    console.log(loader);
    loader.hidden = true
}

export const loader = async (APIFunction, Url ) => {
    showLoader()
    try{
        await APIFunction(Url)
    }catch(error){
        alert(error)
        console.log(error);
    }
    finally{
        hideLoader()
    }
}


