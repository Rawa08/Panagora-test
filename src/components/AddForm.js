const AddForm = (id) => {
    const form =  `
    <form>
    <input type="hidden" name="productId" value="${id}">

    <button class="custom-button">Add to Bag</button>
    </form>
    `

    return form
}


export default AddForm;