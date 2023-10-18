import flask
import openai
import mysql.connector
import main.py



@app.route('/api/send', methods=['POST'])
def receive_code():
    # Get the incorrect Python code from the user
    data = request.json  # Assuming data is sent as JSON

    if 'data' in data:
        incorrect_code = data['data']
        return incorrect_code        
    else:
        return jsonify({"error": "Data is missing or empty"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
