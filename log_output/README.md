# Log output

Generates a random UUID on startup and prints it with a timestamp every 5 seconds.

## Run locally
docker build -t gabrielechegollen/log-output:1.1 .
docker run --rm gabrielechegollen/log-output:1.1

## Deploy to Kubernetes
kubectl apply -f manifests/deployment.yaml
kubectl logs -f deployment/log-output-dep
