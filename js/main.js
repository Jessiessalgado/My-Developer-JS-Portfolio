// Dados
const d = portfolioData;

// Header
document.getElementById("nome").textContent = d.nome;
document.getElementById("profissao").textContent = d.profissao;
document.getElementById("redes").innerHTML = `
  <a href="${d.github}" target="_blank">GitHub</a>
  ${d.linkedin ? '| <a href="'+d.linkedin+'" target="_blank">LinkedIn</a>' : ''}
`;

// Sobre
document.getElementById("descricao-pessoal").textContent = d.descricaoPessoal;

// Projetos
document.getElementById("lista-projetos").innerHTML = d.projetos.map(p => `
  <div class="card" data-aos="fade-up">
    <img src="${p.imagem}" alt="${p.nome}" />
    <h3>${p.nome}</h3>
    <p>${p.descricao}</p>
    <a href="${p.link}" target="_blank">Ver Projeto</a>
  </div>
`).join("");

// Tecnologias
document.getElementById("lista-tecnologias").innerHTML = d.tecnologias.map(t => `
  <div class="tech">
    <img src="${t.logo}" alt="${t.nome}" title="${t.nome}" />
  </div>
`).join("");

// Certificados
document.getElementById("lista-certificados").innerHTML = d.certificados.map(c => `
  <li><strong>${c.titulo}</strong> – ${c.emissor} (${c.ano}) ${c.link ? `<a href="${c.link}" target="_blank">📄</a>` : ''}</li>
`).join("");

// Experiência
document.getElementById("linha-do-tempo").innerHTML = d.experiencias.map(e => `
  <li>
    <h3>${e.titulo}</h3>
    <small><em>${e.local} – ${e.ano}</em></small>
    <p>${e.descricao}</p>
  </li>
`).join("");

// Depoimentos
document.getElementById("lista-depoimentos").innerHTML = d.depoimentos.map(dep => `
  <blockquote><p>"${dep.texto}"</p><footer>— ${dep.nome}</footer></blockquote>
`).join("");

// Idiomas
document.getElementById("lista-idiomas").innerHTML = d.idiomas.map(i => `<li>${i}</li>`).join("");

// Modo escuro
const btn = document.getElementById("toggle-dark");
btn.addEventListener("click", () => document.body.classList.toggle("dark"));
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}
