var aluno = {}
var alunoFotoPerfil = ''
$("#cadastrar").click(function(){
  aluno = {
    nome: $("#nome").val(),
    email: $("#email").val(),
    senha: $("#senha").val(),
    contato: $("#contato").val(),
    dataDeNascimento: $("#nasc").val(),
    rgm: $("#rgm").val(),
    curso: $("#curso").val(),
    periodo: $("#periodo").val(),
    campus: $("#campus").val(),
    tomDePele: $("#pele").val(),
    porteFisico: $("#fisico").val(),
    cabelo: $("#cabelo").val(),
    altura: $("#altura").val()
  }
  if($("#masculino:checked").val()) {
    aluno.sexo = 'Masculino'
  } else if($("#feminino:checked").val()) {
    aluno.sexo = 'Feminino'
  } else {
    alert('Selecione o sexo')
  }
  if($("#escuros:checked").val()) {
    aluno.olhos = 'Escuros'
  } else if($("#claros:checked").val()) {
    aluno.olhos = 'Claros'
  } else {
    alert('Selecione o tom dos olhos')
  }
  if($("#tatooTrue:checked").val()) {
    aluno.tatoo = true
  } else {
    aluno.tatoo = false
  }
  if(alunoFotoPerfil) {
    uploadImage(alunoFotoPerfil)
  } else {
    alert("Selecione usa foto de perfil")
  }
})

$("#foto").change(function(element){
  var file = element.target.files[0]
  var reader = new FileReader()
  reader.onloadend = function(){
    $("#fotoPerfil").prop("src", reader.result)
  }
  if(file){
    reader.readAsDataURL(file)
  }
  alunoFotoPerfil = file
})

function uploadImage(file) {
  return uploadImageToCloudinary(file).then(function(result){
    aluno.fotoPerfil = result.data.url
    alert(aluno.fotoPerfil)
  })
}
