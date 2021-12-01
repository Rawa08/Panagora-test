const about = () => {

    const container = document.createElement('div');
    container.className = 'about-container';

    container.innerHTML = 
    `
    <h1 class="heading-1">About Page</h1>
    <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut quisquam laudantium similique delectus vel hic repellat quae tempore mollitia, 
    distinctio aliquam nostrum provident, nihil nemo ullam. Dolorum, eius perferendis
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut quisquam laudantium similique delectus vel hic repellat quae tempore mollitia, 
    distinctio aliquam nostrum provident, nihil nemo ullam. Dolorum, eius perferendis
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut quisquam laudantium similique delectus vel hic repellat quae tempore mollitia, 
    distinctio aliquam nostrum provident, nihil nemo ullam. Dolorum, eius perferendis
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut quisquam laudantium similique delectus vel hic repellat quae tempore mollitia, 
    distinctio aliquam nostrum provident, nihil nemo ullam. Dolorum, eius perferendis.</p>
    `;


    return container
};

export default about;