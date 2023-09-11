from senha import API_KEY
import requests
import json

headers = {"Authorization": f"Bearer {API_KEY}"}
link = "https://api.openai.com/v1/chat/completions"
requisicao = requests.post(link, headers= headers)
print(requisicao)
print(requisicao.text)

id_modelo = "gpt-3.5-turbo"
body_mensagem = {
    "model": id_modelo
    "messages": 
}