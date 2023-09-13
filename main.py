import os
import openai
import json
import re

API_KEY = "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"
openai.api_key = API_KEY

def is_python_code(input_text):
    # Define a regular expression pattern to match Python code
    pattern = r""

    # Check if the input text matches the pattern
    match = re.match(pattern, input_text, re.MULTILINE)
    return bool(match)

# Opens the json file with incorrect code
with open('incorrect_code.json', 'r') as f:
    data = json.load(f)

# Get the code
code = data['incorrect_code']

user_input = code

if is_python_code(user_input):
    # Call the GPT-4 API with the user's code
    prompt = user_input

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {
                "role": "system",
                "content": "You will be provided with a piece of Python code, and your task is to find and fix bugs in it."
            },
            {
                "role": "user",
                "content": prompt
            },
        ],
        temperature=0,
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
    print(corrected_code)


else:
    print("Invalid input. Please provide valid Python code.")
