test("Increment button is appended to the document", () => {
    document.body.innerHTML = `<button id="counter" type="button"></button>`
    const btnEle = document.getElementById("counter")
    expect(btnEle).toBeInTheDocument
})