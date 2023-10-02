import axios from 'axios';

const handleCopyToAPI = () => {
  const textToCopy = texto; // Obtém o texto do estado do componente

  axios.post('/api/save-python-file', { content: textToCopy })
    .then((response) => {
      console.log(response.data); // Exibe a mensagem de sucesso no console
    })
    .catch((error) => {
      console.error(error); // Exibe o erro no console
    });
};

export default handleCopyToAPI;