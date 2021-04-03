import json

routes = []

coreList = './routesCore.txt'
with open(coreList, 'r') as f:
    for line in f:
        routes.append(line.replace('\n', ''))

blogList = './src/assets/json/blogList.json'
with open(blogList, 'r') as f:
    listJson = json.loads(f.read())
    for blog in listJson:
        routes.append('/blog/' + blog['id'])

projectList = './src/assets/json/projectList.json'
with open(projectList, 'r') as f:
    listJson = json.loads(f.read())
    for project in listJson:
        routes.append('/project/' + project['id'])

with open('routesFile.txt', 'w') as f:
    for route in routes:
        f.write(route + '\n')