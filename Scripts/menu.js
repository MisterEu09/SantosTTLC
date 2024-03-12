function logout()
{
firebase.auth().signOut().then(()=>{
    window.location.href="../html/Home.html";
}).catch(()=>{
    alert('Erro ao fazer logout')
})
}
const data = [
    {

        title: "Beliche Dalia",
        description:
            "AAAAAAAAAAAAAAA",
        link:
        "../html/Itens/BelicheDali.html",
        img:
        "../dados/itens/Camas/beliche dalia.jpg"
    },
    {

        title: "Beliche Dalia",
        description:
            "AAAAAAAAAAAAAAA",
        link:
        "../html/Itens/BelicheDali.html",
        img:
        "../dados/itens/Camas/beliche dalia.jpg"
    },
    {

        title: "Beliche Dalia",
        description:
            "AAAAAAAAAAAAAAA",
        link:
        "../html/Itens/BelicheDali.html",
        img:
        "../dados/itens/Camas/beliche dalia.jpg"
    },
    {

        title: "Beliche Dalia",
        description:
            "AAAAAAAAAAAAAAA",
        link:
        "../html/Itens/BelicheDali.html",
        img:
        "../dados/itens/Camas/beliche dalia.jpg"
    },
    
];
const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector(".search-text");

const displayData = data =>
{
    cardContainer.innerHTML= "";
    data.forEach(e=> {
        cardContainer.innerHTML +=`
        <div class="card">
            <a href="${e.link}">
                <img src="${e.img}"> </img>
                <h3> ${e.title}</h3>
                <p> ${e.description}</p>
            </a>
        </div>
        `
    })
}
searchInput.addEventListener("keyup",(e)=>{
    const search = data.filter(i => i.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    displayData(search)
})
window.addEventListener("load", displayData.bind(null,data))
