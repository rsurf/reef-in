function status(request, response) {
  response.status(200).json({ chave: "os alunos dev.com são acima da média" });
}

export default status;
