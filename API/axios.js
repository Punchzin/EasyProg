import axios from 'axios';

axios.post('https://3000-punchzin-easyprog-t1vgbfkgjut.ws-us104.gitpod.io/correct', `class Person:
def __init__(self, name, age)
    self.name = name
    self.age = age

def print_info(self):
    print(f"Name: {self.name}, Age: {self.age}")

p = Person("John", 25)
p.print_info()`, {
  headers: {
    'Content-Type': 'text/plain'
  }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));