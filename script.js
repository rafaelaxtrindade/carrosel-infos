const criticas = [
    {
        titulo: "Ótima experiência",
        ano: 2025,
        autor: "João Silva",
        descricao: "Amei a experiência! Tudo foi perfeito!",
        estrelas: "★★★★★"
    },
    {
        titulo: "Muito bom",
        ano: 2024,
        autor: "Maria Souza",
        descricao: "Gostei bastante, mas poderia ter sido um pouco melhor.",
        estrelas: "★★★★☆"
    },
    {
        titulo: "Não tão bom",
        ano: 2023,
        autor: "Carlos Lima",
        descricao: "Esperava mais, mas não foi tão ruim.",
        estrelas: "★★★☆☆"
    }
];

function mostrarCritica(index) {
    document.getElementById("titulo").innerText = criticas[index].titulo;
    document.getElementById("ano").innerText = "Ano: " + criticas[index].ano;
    document.getElementById("autor").innerText = "Autor: " + criticas[index].autor;
    document.getElementById("descricao").innerText = criticas[index].descricao;
    document.getElementById("estrelas").innerText = criticas[index].estrelas;
}
