from flask import Flask, jsonify
from flask_cors import CORS
import json
import datetime

app = Flask(__name__)
CORS(app) 

@app.route('/getChanges/<date1>/<date2>', methods=['GET'])
def getChanges(date1, date2):
    print("Date 1:", date1)
    print("Date 2:", date2)
    
    changeObjs = []
    with open("changes.json", "r") as f:
        changes = json.load(f)
        

        start_date = datetime.datetime.strptime(date1, "%Y-%m-%d %H:%M:%S")
        end_date = datetime.datetime.strptime(date2, "%Y-%m-%d %H:%M:%S")

        for change in changes:
            created_at = datetime.datetime.strptime(change["created_at"], "%Y-%m-%d %H:%M:%S")
            print(start_date, created_at, end_date)
            

            if start_date <= created_at <= end_date:
                print(changeObjs)
                changeObjs.append({
                    "userid": change['user_id'],
                    "created_at": change['created_at'],
                    "oldValue": change['old_value'],
                    "newValue": change['new_value'],
                    "changeType": change['field']
                })


    changeObjs.sort(key=lambda x: datetime.datetime.strptime(x["created_at"], "%Y-%m-%d %H:%M:%S"), reverse=True)
    
    return jsonify(changeObjs)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001)

