from flask_cors import CORS
from flask import Flask, request
import json

import shutil
import errno
import os

app = Flask(__name__)
CORS(app)

devAssetsDir = "C:/Users/apolk/Downloads/testApi/dev/assets"
prodAssetsDir = "C:/Users/apolk/Downloads/testApi/prod/assets"

#################################
# JSON
#################################

#Ex: /json/projectList.json
@app.route('/json/<file_name>', methods=["GET", "POST"])
def jsonList(file_name):
    location = '{}/json/{}'.format(devAssetsDir, file_name)
    
    if request.method == "GET":
        with open(location, 'r') as json_file:
            return json_file.read()
    else:
        with open(location, "w") as json_file:
            data = json.loads(request.stream.read())
            json_file.write(json.dumps(data, indent=4))
        return "Success"
    return "Error"

#Ex: /json/projects/example.json
@app.route('/json/<json_type>/<file_name>', methods=["GET", "POST"])
def json(json_type, file_name):
    location = '{}/json/{}/{}'.format(devAssetsDir, json_type, file_name)
    
    if request.method == "GET":
        with open(location, 'r') as json_file:
            return json_file.read()
    else:
        with open(location, "w") as json_file:
            data = json.loads(request.stream.read())
            json_file.write(json.dumps(data, indent=4))
        return "Success"
    return "Error"

#################################
# Content
#################################

#Ex: /content/projects/example/image.png
@app.route('/content/<content_group>/<content_id>/<file_name>', methods=["GET", "POST"])
def content(content_group, content_id, file_name):
    location = '{}/content/{}/{}/{}'.format(devAssetsDir, content_group, content_id, file_name)
    
    if request.method == "GET":
        with open(location, 'r') as file:
            return file.read()
    else:
        with open(location, 'wb') as file:
            file.write(request.stream.read())
        return "Success"
    return "Error"

#Ex: /content/global/image.png
@app.route('/content/<content_group>/<file_name>', methods=["GET", "POST"])
def contentRoot(content_group, file_name):
    location = '{}/content/{}/{}'.format(devAssetsDir, content_group, file_name)
    
    if request.method == "GET":
        with open(location, 'r') as file:
            return file.read()
    else:
        with open(location, 'wb') as file:
            file.write(request.stream.read())
        return "Success"
    return "Error"

#################################
# Other
#################################

@app.route('/push', methods=["GET"])
def pushToProd():
    #Delete current production folder
    if os.path.isdir(prodAssetsDir):
        shutil.rmtree(prodAssetsDir)
    
    try:
        shutil.copytree(devAssetsDir, prodAssetsDir)
    except OSError as e:
        # If the error was caused because the source wasn't a directory
        if e.errno == errno.ENOTDIR:
            shutil.copy(src, dest)
        else:
            return ('Directory not copied. Error: %s' % e)
    return "Published to Production"

if __name__ == '__main__':
    app.run(debug=True)
