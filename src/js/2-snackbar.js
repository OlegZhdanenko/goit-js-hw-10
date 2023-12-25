import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");;
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault()
    let getDelay = event.target.elements.delay.value;
    const checkValue = event.target.elements.state.value;
    
    const promice = new Promise((resolve, reject) => {
        if (checkValue === "fulfilled") {
            resolve(setTimeout(() => {
                iziToast.success({
                    position:"topRight",
                    message: `✅ Fulfilled promise in ${getDelay}ms`,
                })
            }, getDelay))
        } else {
            reject(setTimeout(() => {
                iziToast.error({
                    position:"topRight",
                    message: `❌ Rejected promise in ${getDelay}ms`,
                })
            }, getDelay)
            )
        };
        
    });
    promice.then(value => console.log(`✅ Fulfilled promise in ${getDelay}ms`))
            .catch(value => console.log(`❌ Rejected promise in ${getDelay}ms`));
};

