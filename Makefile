IMAGE ?= filefrog/o-fortuna

build:
	docker build -t $(IMAGE) .

push: build
	docker push $(IMAGE)

buildx: 
	docker buildx build --push --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --tag $(IMAGE) .
