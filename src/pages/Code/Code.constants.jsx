const FakeCode = `# Isso é apenas um código errado como exemplo.

import requests

class RequestException(Exception):
    pass

def get_random_data(data_type, parameters=None):
    valid_types = ['users', 'posts', 'comments']

    if data_type not in valid_types:
        raise ValueError(f"Invalid data type. Valid types: {', '.join(valid_types)}")

    url = f"https://api.example.com/{data_type}"

    try:
        response = requests.get(url, params=parameters)
        response.raise_for_status()

        data = response.json()

        if data_type == 'users':
            data = [user['name'] for user in data]
        elif data_type == 'posts':
            data = [{'title': post['title'], 'content': post['content']} for post in data]
        elif data_type == 'comments':
            data = [comment['text'] for comment in data]

        return data

    except requests.exceptions.RequestException as e:
        raise RequestException(f"Request error: {e}")

try:
    desired_type = 'users'
    additional_parameters = {'active': True, 'min_age': 25}
    data = get_random_data(desired_type, additional_parameters)
    print(f"Data of {desired_type}: {data}")
except RequestException as e:
    print(f"Error: {e}")
except ValueError as ve:
    print(f"Error: {ve}")`

export default { FakeCode };