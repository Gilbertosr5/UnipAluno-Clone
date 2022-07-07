const db = [
    {
        'nome' : 'admin',
        'matricula' : 'admin',
        'emailAcademico' : 'admin@aluno.unip.br',
        'senha' : 'admin'
    },
    {
        'nome' : 'Gilberto dos Santos Ribeiro',
        'matricula' : 'T844728',
        'emailAcademico' : 'gilberto.teste@aluno.unip.br',
        'senha' : '12345'
    },
    {
        'nome' : 'Vivian Domingues',
        'matricula' : 'V050104',
        'emailAcademico' : 'vivian.domingues3@aluno.unip.br',
        'senha' : '123654'
    }
]

// PAGINA LOGIN (VALIDAÇÃO)
var form = document.getElementById('form');
var inpMatricula = document.getElementById('matricula');
var inpSenha = document.getElementById('password');

form.addEventListener('submit', function(e) {
    var matricula = inpMatricula.value
    var senha = inpSenha.value
    for(let i=0;i < db.length;i++){
        if(matricula == db[i].matricula){
            if(senha == db[i].senha){
                console.log('logado')
                localStorage.setItem('logado', 'True')
                localStorage.setItem('matricula', matricula)
                window.location.href = 'html/home.html'
            }else{
                console.log('senha incorreta')
            }
        }else{
            console.log('matricula não existe')
        }
    }

    // impede o envio do form
    e.preventDefault();
});

// PAGINA HOME VERIFICAÇÃO DO LOGIN
function loginValidation(){
    document.getElementsByTagName('body')[0].style.display = "none"
    var logado = localStorage.getItem('logado')
    var lcMatricula = localStorage.getItem('matricula')
    if(logado == 'True'){
        console.log('realmente logado')
        document.getElementsByTagName('body')[0].style.display = "block"
        for(let i=0;i < db.length;i++){
            if(lcMatricula == db[i].matricula){
                document.getElementById('nome').innerHTML = db[i].nome
                document.getElementById('email').innerHTML = db[i].emailAcademico
            }else{
                console.log('não encontrou usuário')
            }
        }
    }else{
        window.location.href = '../index.html'
        alert('Faça o login para entrar')
    }
}

// BOTÃO LOGOUT
function logout(){
    localStorage.setItem('logado', 'False')
    localStorage.setItem('matricula', null)
    window.location.href = '../index.html'
}

function clearLS(){
    localStorage.clear()
}