// const url = process.env.API_URL;
export async function sendContactForm(prevState: unknown,formData: FormData){
    console.log(Object.fromEntries(formData.entries()));
    return fetch( `https://example.com/api/contact` , {
        method: 'POST',
        body: formData
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error(error);
        return error;
    });
} 
