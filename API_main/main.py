import openai
import json


API_KEY = "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"
openai.api_key = API_KEY

# Opens the json file with incorrect code
with open('incorrect_code.json', 'r') as f:
    data = json.load(f)

# Get the code
code = data['incorrect_code']

prompt = ""

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "system",
            "content": "You will be provided with a piece of Python code, and your task is to find and fix bugs in it. And then explain the bugs."
        },
        {
            "role": "user",
            "content": prompt
        },
    ],
    temperature=0.5,
    max_tokens=1024
)

# Extract the corrected code from the response
corrected_code = response['choices'][0]['message']['content']
print(corrected_code)