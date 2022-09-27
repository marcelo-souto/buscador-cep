let cep = "";

$('#cep').keyup(function () {
  $(this).mask('00000-000')
})

function pegarValor() {
  let valor = $("#cep").val();

  valor = valor.replace('-','')

  console.log(valor)

  if (valor.length > 7) {
    cep = valor;
    $.ajax({
      url: `https://viacep.com.br/ws/${cep}/json/`,
      success: (json) => {
        verJson(json);
      },
      error: () => {
        console.log('errou')
      },
      statusCode: (code) => {
        console.log(code)
      }
    });
  }
}

$("#cep").keyup(pegarValor);

function verJson(json) {
  let { cep, logradouro, complemento, bairro, localidade, uf } = json;

  $('.cep').html(cep)
  $('.logradouro').html(logradouro)
  $('.complemento').html(complemento)
  $('.bairro').html(bairro)
  $('.localidade').html(localidade)
  $('.uf').html(uf)
}