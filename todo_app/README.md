# Todo app

Web server for the course project. The port is set with the `PORT` environment variable (default 3000).
On startup it prints `Server started in port NNNN`.

## Run locally
docker build -t gabrielechegollen/todo-app:1.2 .
docker run --rm -e PORT=8080 gabrielechegollen/todo-app:1.2

## Deploy to Kubernetes
kubectl apply -f manifests/deployment.yaml
kubectl logs deployment/todo-app-dep
