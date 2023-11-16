class CardShadow extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <template id="contact-card">
            <section class="card">
                <div class="img"></div>
                <div class="blockOne">
                    <b>Имя:</b>
                    <p class="one"></p>
                </div>
                <div class="blockTwo">
                    <b>Описание:</b>
                    <p class="two"></p>
                </div>
                <div class="blockThree">
                    <b>Возраст:</b>
                    <p class="three"></p>
                </div>
            </section>
        </template>
    `
    }
}
window.customElements.define('card-component', CardShadow)


function addItem() {
    let pict = document.querySelector('.pict').value
    let name = document.querySelector('.name').value
    let desc = document.querySelector('.desc').value
    let age = document.querySelector('.age').value
    let content = document.getElementById('content');
    let t = document.getElementById('contact-card');
    let txtOne = t.content.querySelector('.one');
    let txtTwo = t.content.querySelector('.two')
    let txtThree = t.content.querySelector('.three')
    let img = t.content.querySelector('.img')
    img.innerHTML = `<img src="${pict}" width=350px>`
    txtOne.textContent = name
    txtTwo.textContent = desc
    txtThree.textContent = age
    let cardOne = t.content.cloneNode(true);
    content.append(cardOne)

}

const btn = document.querySelector('.btn')
btn.addEventListener('click', e => {
    e.preventDefault()
    addItem()
})

