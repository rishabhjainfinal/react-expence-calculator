export default function swDev()
{
    let swurl = `${process.env.PUBLIC_URL}/sw.js`;
    if ('serviceWorker' in navigator) {
        // Only call navigator.serviceWorker.register() if that's true.

        navigator.serviceWorker.register(swurl).then((response)=>{
            // console.warn('response',response)
            console.log(1)
        })
    }
}