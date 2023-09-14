import openai
import json

API_KEY = "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"
openai.api_key = API_KEY

# Opens the json file with incorrect code
with open('incorrect_code.json', 'r') as f:
    data = json.load(f)

# Get the code
code = data['incorrect_code']

prompt = code

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

# Save the corrected code in a JSON file
data = {"corrected_code": corrected_code}

with open('corrected_code.json', 'w') as file:
    json.dump(data, file, indent=4)

# Read the response from the JSON file
with open('corrected_code.json', 'r') as f:
    data = json.load(f)

# Get the corrected code content
content = data['corrected_code']
print(content)