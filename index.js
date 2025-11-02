import express from 'express';
const host = '0.0.0.0';
const porta = 3000;
var listaClientes = [];

const server = express();

server.get("/", (requisicao, resposta) => {
    //disponibiliza o menu
    resposta.send(`
<DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <title>Atividade 2 PPI - Formulario</title>
    </head>
     <body>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/CadastrarClientes">Cadastrar Clientes</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</html>
`);
});
server.get("/CadastrarClientes", (requisicao, resposta) => {
    resposta.send(`
   <DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <title>Cadastrar Clientes</title>
      </head>
     <body class="p-4">
       <div class="container d-flex justify-content-center">
        <div class="card p-4 shadow-sm" style="max-width: 700px; width: 100%;">
          <h2 class="text-center mb-4">Cadastrar Clientes</h2>
          <form method="POST" action="/adicionarCliente" class="row g-3 needs-validation" novalidate>
          <div class="col-md-4">
            <label for="nome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="nome" placeholder="Francieli" required>
            <div class="valid-feedback">Muito bom!</div>
          </div>

          <div class="col-md-4">
            <label for="sobrenome" class="form-label">Sobrenome</label>
            <input type="text" class="form-control" id="sobrenome" placeholder="Caldeirao" required>
            <div class="valid-feedback">Muito bom!</div>
          </div>

          <div class="col-md-4">
            <label for="nomeUsuario" class="form-label">Nome de Usuário</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="text" class="form-control" id="nomeUsuario" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback">Por favor, escolha um nome de usuário.</div>
            </div>
          </div>

          <div class="col-md-6">
            <label for="validacaoEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="validacaoEmail" placeholder="exemplo@email.com" required>
            <div class="invalid-feedback">Por favor, forneça um email válido.</div>
          </div>

            <div class="col-md-6">
              <label for="validacaoTelefone" class="form-label">Telefone</label>
              <input type="tel" class="form-control" id="validacaoTelefone" placeholder="(00) 00000-0000" required>
              <div class="invalid-feedback">Por favor, forneça um número de telefone válido.</div>
            </div>

            <div class="col-md-6">
              <label for="validacaoSenha" class="form-label">Senha</label>
              <input type="password" class="form-control" id="validacaoSenha" required>
              <div class="invalid-feedback">Por favor, forneça uma senha.</div>
            </div>

            <div class="col-md-6">
              <label for="validacaoConfirmSenha" class="form-label">Confirmar Senha</label>
              <input type="password" class="form-control" id="validacaoConfirmSenha" required>
              <div class="invalid-feedback">As senhas não coincidem.</div>
            </div>

            <div class="col-md-4">
              <label for="validacaoNascimento" class="form-label">Data de Nascimento</label>
              <input type="date" class="form-control" id="validacaoNascimento" required>
              <div class="invalid-feedback">Por favor, forneça sua data de nascimento.</div>
            </div>

            <div class="col-md-8">
              <label for="validacaoEndereco" class="form-label">Endereço</label>
              <input type="text" class="form-control" id="validacaoEndereco" placeholder="Rua, número, bairro" required>
              <div class="invalid-feedback">Por favor, forneça seu endereço.</div>
            </div>

            <div class="col-md-6">
              <label for="validacaoCidade" class="form-label">Cidade</label>
              <input type="text" class="form-control" id="validacaoCidade" required>
              <div class="invalid-feedback">Por favor, forneça uma cidade válida.</div>
            </div>

            <div class="col-md-3">
              <label for="validacaoEstado" class="form-label">Estado</label>
              <select class="form-select" id="validacaoEstado" required>
                <option selected disabled value="">Escolha...</option>
                <option>SP</option>
                <option>RJ</option>
                <option>MG</option>
                <option>RS</option>
              </select>
              <div class="invalid-feedback">Por favor, selecione um estado válido.</div>
            </div>

            <div class="col-md-3">
              <label for="validacaoCep" class="form-label">CEP</label>
              <input type="text" class="form-control" id="validacaoCep" placeholder="00000-000" required>
              <div class="invalid-feedback">Por favor, forneça um CEP válido.</div>
            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">
                  Concordo com os termos e condições.
                </label>
                <div class="invalid-feedback">Você deve concordar antes de enviar.</div>
              </div>
            </div>

            <div class="col-12">
              <button class="btn btn-success" type="submit">Cadastrar</button>
            </div>
          </form>
  </div>
</div>

<script>
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const password = document.getElementById('validacaoSenha');
      const confirmPassword = document.getElementById('validacaoConfirmSenha');
      const phone = document.getElementById('validacaoTelefone');
      const zip = document.getElementById('validacaoCep');

      const phoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

      const zipRegex = /^\d{5}-?\d{3}$/;

      confirmPassword.setCustomValidity("");
      phone.setCustomValidity("");
      zip.setCustomValidity("");

      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("As senhas não coincidem");
      }

      if (!phoneRegex.test(phone.value)) {
        phone.setCustomValidity("Formato de telefone inválido");
      }

      if (!zipRegex.test(zip.value)) {
        zip.setCustomValidity("Cep inválido");
      }

      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

`);     
});
server.post("/adicionarCliente", (requisicao, resposta) => {
    console.log("Cliente adicionado com sucesso!");
    listaClientes.push();
});

server.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
});