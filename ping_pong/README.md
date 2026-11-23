# Ping-pong

Responds `pong N` to GET requests on `/pingpong` and increases an in-memory counter.
Any other path returns 404.

## Run locally
docker build -t gabrielechegollen/ping-pong:1.9 .
docker run --rm --init -p 3001:3000 gabrielechegollen/ping-pong:1.9
# open http://localhost:3001/pingpong

## Deploy to Kubernetes
kubectl apply -f manifests/
# Shared Ingress (with Log output) lives in ../log_output/manifests/ingress.yaml
kubectl apply -f ../log_output/manifests/
# open http://localhost:8081/pingpong
